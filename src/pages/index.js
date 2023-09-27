import * as React from "react"
import "../styles/main.scss"

const IndexPage = () => {
  return (
    <main>

      <nav class="no-js">
          <div class="vetch-topbar-nav">
          <div class="title-bar vetch-topbar" data-responsive-toggle="vetch-menu" data-hide-for="medium">
              <button class="menu-icon" type="button" data-toggle="vetch-menu"></button>
              <a href="/" border="0"><div class="vetch-logo"><img src="{% static 'dist/images/vetch-logo.svg' %}" width="114" height="24" alt="Vetch logo"/></div></a>
          </div>
          <div class="grid-container full">
              <div class="grid-x grid-padding-x">
                  <div class="large-12 cell">
                      <div class="grid-container">
                          <div class="grid-x grid-padding-x">
                              <div class="large-12 medium-12 small-12">
                                  <div class="top-bar vetch-topbar" id="vetch-menu">
                                      <div class="top-bar-left">
                                          <a href="/" border="0" class="logo-link"><div class="vetch-logo"><img src="{% static 'dist/images/vetch-logo.svg' %}" height="24" alt="Vetch logo"/></div></a>
                                          <ul class="vertical medium-horizontal menu" data-responsive-menu="accordion medium-dropdown">
                                              <li class="home"><a href="/" tabindex="0">Features</a></li>
                                              <li class="charities"><a href="/charities" tabindex="0">Charities</a></li>
                                              <li class="events"><a href="/events" tabindex="0">Events</a></li>
                                              <li class="help"><a href="/help-centre" tabindex="0">Help centre</a></li>
                                          </ul>
                                      </div>
                                      <div class="top-bar-right">
                                          <button href="#" class="button vetch-live-button" data-open="vetch-info-modal">Get Vetch app</button>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
      </nav>

      <div class="grid-container flex-align fluid vetch-footer vetch-footer-appblurb">
          <div class="grid-x grid-padding-x">
              <div class="large-12 cell">
                  <span class="vetch-appicon"></span>
                  <h3><strong>Run in the real world, collect charity donations.</strong></h3>
                  <p>Download, join us and create your virtual fundraising event for free. Available on iOS.</p>
                  <div class="large-12 cell download-vetch align-center-middle text-center">
                      <a href="https://apps.apple.com/us/app/vetch/id1529874945" target="_blank" class="download-vetch-button appstore" title="Download Vetch for free on app store"></a>
                      <img src="{% static 'dist/images/qr-code.svg' %}" class="vetch-qr-code" alt="Vetch QR code" />
                  </div>
              </div>
          </div>
      </div>

    </main>
  )
}

export default IndexPage

export const Head = () => <title>uGather</title>
