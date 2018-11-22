const Preview = ({ entry, widgetFor }) => {
  const data = entry.get('data').toJS()
  return (
    <div style={{margin:'0 auto', padding: 0, width: '100%', fontFamily: "Calibre, 'Circular Std', Arial, Helvetica, sans-serif", color: '#0f253a', minWidth: '750px'}}>
    <table style={{borderCollapse: 'collapse', padding:0, margin:0, width: '100%', backgroundColor: '#fafafa'}}>
      <tbody>
        <tr>
          <td>
            <table style={{width: '100%', borderCollapse: 'collapse'}}>
              <tbody>
                <tr>
                  <td style={{paddingTop: '50px', paddingBottom: '40px'}}>
                    <div style={{fontSize: '28px', fontWeight: 900, textAlign: 'center', color: '#0f253a'}}>
                      homodea
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </td>
        </tr>
        <tr>
          <td style={{paddingBottom: '50px', textAlign:'center'}}>
            <table style={{margin:'0 auto', borderCollapse: 'collapse', background: 'white', textAlign:'left'}}>
              <tbody>
                <tr>
                  <td style={{minWidth: '700px', maxWidth: '700px'}}>
                    <div style={{padding: '100px 125px'}}>
                      <div style={{fontSize: '30px', fontWeight: 700, color: '#0f253a', paddingBottom: '70px'}}>{data.header}</div>
                      <div style={{fontSize: '18px', fontWeight: 700, color: '#0f253a', paddingBottom: '30px', whiteSpace: 'pre-wrap'}}>{data.msg}</div>
                      {(data.cta && data.ctat) ?
                        <span id="cta" style={{cursor: 'pointer', height: '60px', minWidth: '225px', paddingLeft:'4px', paddingRight:'4px', textAlign: 'center', background: 'linear-gradient(to right,red 0%,#f30b6e 57.5%,#f30b71 100%)', display: 'inline-block'}}>
                          <a href={data.cta} style={{textDecoration: 'none', paddingTop: '20px', fontSize:'16px', lineHeight: '20px', color: 'white', display: 'inline-block', letterSpacing: '3px', fontWeight: 700}}>{data.ctat}</a>
                        </span>
                      : false }
                      <div style={{paddingTop: '70px', paddingBottom: '20px'}}>
                        <img src="https://static.staging.homodea.com/img/uploads/email-team-avatar.png" style={{width: '32px', height: '32px', borderRadius: '50%', verticalAlign: 'middle'}}/>
                        <span style={{fontSize: '14px', fontWeight: 700, paddingLeft: '5px'}}>Dein homodea-Team</span>
                      </div>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </td>
        </tr>
        <tr>
          <td>
            <table style={{width: '100%', borderCollapse: 'collapse'}}>
              <tbody>
                <tr>
                  <td style={{height: '160px', backgroundColor: '#0f253a'}}>
                    <div style={{height: '100px', textAlign: 'center'}}>
                      <div style={{fontSize: '23px', color: 'white', fontWeight: 900}}>homodea</div>
                      <div style={{paddingTop: '20px', paddingBottom: '15px'}}>
                        <a href="https://homodea.com/privacy" style={{paddingLeft: '20px', fontSize: '14px', color: '#bfbfbf', textDecoration: 'none'}}>Datenschutz</a>
                        <a href="https://homodea.com/terms" style={{paddingLeft: '20px', fontSize: '14px', color: '#bfbfbf', textDecoration: 'none'}}>Nutzungsbedingungen</a>
                      </div>
                      <div>
                        <span style={{fontSize: '14px', color: '#bfbfbf'}}>&#169; 2018 homodea</span>
                      </div>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
  )
}

CMS.registerPreviewTemplate('email-basic', Preview)

