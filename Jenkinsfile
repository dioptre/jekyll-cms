////////////////////////////////////////////////////////////////////////////////////////////////////////
// CONFIGURATION VARIABLES
////////////////////////////////////////////////////////////////////////////////////////////////////////

// Branch names for production and staging
def BRANCH_PROD = "release"
def BRANCH_STAG = "master"

// S3 Bucket to upload built files
def S3_BUCKET_PROD = "static-lt-production";
def S3_BUCKET_STAG = "static-lt-staging";
def S3_BUCKET_TEST = "static-lt-staging";

// CF Distribution to invalidate
def CF_DISTID_PROD = "E2B0QWRL3GRC43";
def CF_DISTID_STAG = "E3NXJX4E53A8FP";
def CF_DISTID_TEST = "E3NXJX4E53A8FP";

// Excluded files in S3 sync/upload
def EXCLUDE_SYNC = "--exclude '.gitignore' --exclude 'Jenkinsfile' --exclude 'README.md' --exclude 'run.sh'"

////////////////////////////////////////////////////////////////////////////////////////////////////////
// PIPELINE
////////////////////////////////////////////////////////////////////////////////////////////////////////

properties([
  [$class: 'GithubProjectProperty', displayName: '', projectUrlStr: 'https://github.com/ichliebedich/jekyll-cms/']
])

pipeline {
  agent any
  
  options { 
    disableConcurrentBuilds()
    buildDiscarder(logRotator(numToKeepStr: '8'))
  }
  
  triggers {
    githubBranches events: [hashChanged(), restriction(exclude: 'false', matchAsPattern: 'false', matchCriteriaStr: 'master')], preStatus: true, spec: '', triggerMode: 'HEAVY_HOOKS', repoProviders: [githubPlugin(manageHooks: false, repoPermission: 'PUSH')]
  }
  
  environment {
    S3_BUCKET = "${(env.BRANCH_NAME == BRANCH_PROD) ? S3_BUCKET_PROD : (env.BRANCH_NAME == BRANCH_STAG) ? S3_BUCKET_STAG : S3_BUCKET_TEST}"
    CF_DISTID = "${(env.BRANCH_NAME == BRANCH_PROD) ? CF_DISTID_PROD : (env.BRANCH_NAME == BRANCH_STAG) ? CF_DISTID_STAG : CF_DISTID_TEST}"
    EXCLUDSYN = "${EXCLUDE_SYNC}"
  }

  stages {
    stage('build') {
      steps {
        sh """
          jekyll --version
          jekyll b
        """
      }
    }
    stage('deploy') {
      steps {
        sh """
          aws --version
          aws s3 sync ./_site/ s3://${S3_BUCKET}/latest/ --delete ${EXCLUDSYN}
          aws cloudfront create-invalidation --distribution-id ${CF_DISTID} --paths '/*'
        """
      }
    }
  }
}
