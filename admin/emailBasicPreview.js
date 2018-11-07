var Preview = createClass({
  render: function() {
    var entry = this.props.entry;
    var header = entry.getIn(['data', 'header']);
    var body = entry.getIn(['data', 'body']);

    return h('div', {style: {margin: "0 auto", padding: "0", width: "100%", fontFamily: "'Circular Std',sans-serif", color: "#0f253a", minWidth: "750px"}},
      h('table', {style: {borderCollapse: "collapse", padding: "0", margin: "0", width: "100%", backgroundColor: "#fafafa"}},
        h('tbody', {},
          h('tr', {}, 
            h('td', {},
              h('table', {style: {width: "100%", borderCollapse: "collapse"}},
                h('tbody', {},
                  h('tr', {},
                    h('td', {style: {paddingTop: "50px", paddingBottom: "40px"}},
                      h('div', {style: {fontSize: "28px", fontWeight: "900", textAlign: "center", color: "#0f253a"}}, "homodea")
                    )
                  )
                )
              )
            )
          ),
          h('tr' , {},
            h('td', {style: {paddingBottom: "50px"}},
              h('table', {align: "center", style: {margin: "0 auto", borderCollapse: "collapse", background: "white"}},
                h('tbody', {},
                  h('tr', {},
                    h('td', {style: {minWidth: "700px", maxWidth: "700px"}},
                      h('div', {style: {padding: "100px 125px"}},
                        h('div', {style: {fontSize: "30px", fontWeight: "700", color: "#0f253a", paddingBottom: "70px"}}, header),
                        h('div', {style: {fontSize: "18px", fontWeight: "700", color: "#0f253a", paddingBottom: "30px", whiteSpace: "pre-wrap"}}, body),
                        h('div', {style: {paddingTop: "70px", paddingBottom: "20px"}},
                          h('img', {src: "/img/uploads/email-team-avatar.png", style: {width: "32px", height: "32px", borderRadius: "50%", verticalAlign: "middle"}}),
                          h('span', {style: {fontSize: "14px", fontWeight: "700", paddingLeft: "5px"}}, "Dein homodea-Team")
                        )
                      )
                    )
                  )
                )
              )
            )
          ),
          h('tr', {},
            h('td', {},
              h('table', {style: {width: "100%", borderCollapse: "collapse"}},
                h('tbody', {},
                  h('tr', {},
                    h('td', {style: {height: "160px", backgroundColor: "#0f253a"}},
                      h('div', {style: {height: "100px", textAlign: "center"}},
                        h('div', {style: {fontSize: "23px", color: "white", fontWeight: "900"}}, "homodea"),
                        h('div', {style: {paddingTop: "20px", paddingBottom: "15px"}},
                          h('a', {href: "https://www.homodea.com/imprint", style: {fontSize: "14px", color: "#bfbfbf", textDecoration: "none"}}, "Impressum"),
                          h('a', {href: "https://www.homodea.com/privacy", style: {paddingLeft: "20px", fontSize: "14px", color: "#bfbfbf", textDecoration: "none"}}, "Datenschutz"),
                          h('a', {href: "https://www.homodea.com/", style: {paddingLeft: "20px", fontSize: "14px", color: "#bfbfbf", textDecoration: "none"}}, "Nutzungsbedingungen")
                        ),
                        h('div', {},
                          h('span', {style: {fontSize: "14px", color: "#bfbfbf"}}, "©2018 homodea")
                        )
                      )
                    )
                  )
                )
              )
            )
          )
        )
      )
    );
  }
});

CMS.registerPreviewTemplate("basic-email", Preview);