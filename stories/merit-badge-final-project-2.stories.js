import { html } from 'lit';
import '../src/merit-badge-final-project-2.js';

export default {
  title: 'MeritBadgeFinalProject2',
  component: 'merit-badge-final-project-2',
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

function Template({ title, backgroundColor }) {
  return html`
    <merit-badge-final-project-2
      style="--merit-badge-final-project-2-background-color: ${backgroundColor || 'white'}"
      .title=${title}
    >
    </merit-badge-final-project-2>
  `;
}

export const App = Template.bind({});
App.args = {
  title: 'My app',
};
