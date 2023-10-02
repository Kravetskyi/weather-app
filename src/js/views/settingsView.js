import View from "./View.js";

class SettingsView extends View {
  _parentElement = document.querySelector("nav");
  _navElement = document.querySelector(".n-item-4");
  _container = document.querySelector(".content");
  _generalContainer = document.querySelector(".seven-day");

  addHandlerClick(callback) {
    this._parentElement.addEventListener("click", (e) => {
      const target = e.target.closest(".n-item-4");
      if (!target) return;
      callback();
    });
  }

  addHandlerSettings(callback) {
    this._container.addEventListener("click", (e) => {
      const pressure = e.target.closest(".pressure");
      const temperature = e.target.closest(".temperature");
      const distance = e.target.closest(".distance");
      const precipitation = e.target.closest(".precipitation");
      const windSpeed = e.target.closest(".wind-speed");
      if (
        !pressure &&
        !temperature &&
        !distance &&
        !precipitation &&
        !windSpeed
      )
        return;
      callback(e.target);
    });
  }

  clearSettingsContainer() {
    const setCont = [
      document.querySelector(".units"),
      document.querySelector(".settings"),
      document.querySelector(".general"),
      document.querySelector(".general-settings"),
    ];
    this._makeInvisible(setCont);
  }

  reviveSettings() {
    const setCont = [
      document.querySelector(".units"),
      document.querySelector(".settings"),
      document.querySelector(".general"),
      document.querySelector(".general-settings"),
    ];
    this._makeVisible(setCont);
  }

  insertElements() {
    if (document.querySelector(".settings")) return this.reviveSettings();
    const html = `<div class="setting-text units">Units</div>
    <div class="settings">
      <div class="setting-option">
        <div class="setting-o-text">TEMPERATURE</div>
        <div class="toggle-container">
          <div class="toggle temperature">
            <div class="toggle-el toggle-el--active celsius" data-setting="temperature">Celsius</div>
            <div class="toggle-el fahrenheit" data-setting="temperature">Fahrenheit</div>
          </div>
        </div>
      </div>
      <div class="setting-option">
        <div class="setting-o-text">WIND SPEED</div>
        <div class="toggle-container">
          <div class="toggle wind-speed">
            <div class="toggle-el toggle-el--active wind-km" data-setting="windSpeed">km/h</div>
            <div class="toggle-el wind-miles" data-setting="windSpeed">m/h</div>
            <div class="toggle-el wind-knots" data-setting="windSpeed">Knots</div>
          </div>
        </div>
      </div>
      <div class="setting-option">
        <div class="setting-o-text">PRESSURE</div>
        <div class="toggle-container">
          <div class="toggle pressure">
            <div class="toggle-el pressure-in" data-setting="pressure">Inches</div>
            <div class="toggle-el toggle-el--active pressure-mb" data-setting="pressure">mb</div>
            <div class="toggle-el pressure-mm" data-setting="pressure">mm</div>
          </div>
        </div>
      </div>
      <div class="setting-option">
        <div class="setting-o-text">PRECIPITATION</div>
        <div class="toggle-container">
          <div class="toggle precipitation">
            <div class="toggle-el precipitation-in" data-setting="precipitation">Inches</div>
            <div class="toggle-el toggle-el--active precipitation-mm" data-setting="precipitation">Millimiters</div>
          </div>
        </div>
      </div>
          <div class="setting-option">
        <div class="setting-o-text">DISTANCE</div>
        <div class="toggle-container">
          <div class="toggle distance">
            <div class="toggle-el toggle-el--active distance-km" data-setting="distance">Kilometers</div>
            <div class="toggle-el distance-miles" data-setting="distance">Miles</div>
          </div>
        </div>
      </div>
    </div>
    `;
    this._container.insertAdjacentHTML("beforeend", html);

    const generalhtml = `
    <div class="setting-text general">General</div>
    <div class="general-settings">
      <div class="general-option t-f-hours">
        <div class="general-row">
          <p class="general-text ">24-Hour Time</p>
          <div class="toggle-switch-container">
            <input type="checkbox" class="toggle-switch" checked>
          </div>
        </div>
      </div>
      <div class="general-option location">
        <div class="general-row">
          <p class="general-text">Location</p>
          <div class="toggle-switch-container">
            <input type="checkbox" class="toggle-switch" checked>
          </div>
        </div>
        <div class="general-row row-small">
          <p class="general-desc">Get weather of your location</p>
        </div>
      </div>
      <div class="general-option notifications">
        <div class="general-row">
          <p class="general-text ">Notifications</p>
          <div class="toggle-switch-container">
            <input type="checkbox" class="toggle-switch" checked>
          </div>
        </div>
        <div class="general-row row-small">
          <p class="general-desc">Be aware of the weather</p>
        </div>
      </div>
    </div>`;
    this._generalContainer.insertAdjacentHTML("beforeend", generalhtml);
  }
}

export default new SettingsView();