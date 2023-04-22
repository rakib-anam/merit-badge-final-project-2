import { LitElement, html, css } from 'lit-element';

class BadgeSticker extends LitElement {

  static get properties() {
    return {
      title: { type: String },
      date: { type: String },
      skills: { type: Array },
      icon: { type: String },
      locked: { type: Boolean },
      verificationLink: { type: String },
      eventName: { type: String }
    };
  }

  static get styles() {
    return css`
      :host {
        display: inline-block;
        text-align: center;
        position: relative;
      }

      .badge {
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 200px;
        height: 200px;
        background-color: var(--badge-color, #CCC);
        border: 2px solid var(--badge-stitch-color, #FFF);
        border-radius: 50%;
        box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.5);
        overflow: hidden;
        cursor: pointer;
      }

      .badge.locked {
        opacity: 0.5;
        cursor: not-allowed;
      }

      .badge-icon {
        font-size: 50px;
        color: var(--badge-icon-color, #ffffff);
      }

      .badge-label {
        font-size: 18px;
        font-weight: bold;
        margin-top: 10px;
        color: var(--badge-label-color, #333);
        word-wrap: break-word;
        width: 120px;
      }

      .badge-date {
        font-size: 12px;
        margin-top: 5px;
        color: var(--badge-date-color, #333);
      }
    `;
  }

  constructor() {
    super();
    this.locked = true;
    this.addEventListener('click', this._handleClick);
  }

  render() {
    return html`
      <div class="badge ${this.locked ? 'locked' : ''}">
        <div class="badge-icon">${this.icon}
        <div class="badge-label">${this.title}</div>
      <div class="badge-date">${this.date}</div>
      </div>
      </div>
    `;
  }

  _handleClick() {
    if (!this.locked) return;

    const event = new CustomEvent(this.eventName, {
      detail: { badge: this }
    });
    this.dispatchEvent(event);
  }

}

customElements.define('badge-sticker', BadgeSticker);
