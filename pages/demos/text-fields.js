import 'docs/src/modules/components/bootstrap';
// --- Post bootstrap -----
import React from 'react';
import MarkdownDocs from 'docs/src/modules/components/MarkdownDocs';

const req = require.context('markdown', true, /.md$/);

function Page(props) {
  return (
    <MarkdownDocs
      markdown={req(`./text-fields${props.lang}.md`)}
      demos={{
        'pages/demos/text-fields/TextFields.js': {
          js: require('docs/src/pages/demos/text-fields/TextFields').default,
          raw: preval`
module.exports = require('fs')
  .readFileSync(require.resolve('docs/src/pages/demos/text-fields/TextFields'), 'utf8')
`,
        },
        'pages/demos/text-fields/FilledTextFields.js': {
          js: require('docs/src/pages/demos/text-fields/FilledTextFields').default,
          raw: preval`
module.exports = require('fs')
  .readFileSync(require.resolve('docs/src/pages/demos/text-fields/FilledTextFields'), 'utf8')
`,
        },
        'pages/demos/text-fields/OutlinedTextFields.js': {
          js: require('docs/src/pages/demos/text-fields/OutlinedTextFields').default,
          raw: preval`
module.exports = require('fs')
  .readFileSync(require.resolve('docs/src/pages/demos/text-fields/OutlinedTextFields'), 'utf8')
`,
        },
        'pages/demos/text-fields/ComposedTextField.js': {
          js: require('docs/src/pages/demos/text-fields/ComposedTextField').default,
          raw: preval`
module.exports = require('fs')
  .readFileSync(require.resolve('docs/src/pages/demos/text-fields/ComposedTextField'), 'utf8')
`,
        },
        'pages/demos/text-fields/TextFieldMargins.js': {
          js: require('docs/src/pages/demos/text-fields/TextFieldMargins').default,
          raw: preval`
module.exports = require('fs')
  .readFileSync(require.resolve('docs/src/pages/demos/text-fields/TextFieldMargins'), 'utf8')
`,
        },
        'pages/demos/text-fields/InputAdornments.js': {
          js: require('docs/src/pages/demos/text-fields/InputAdornments').default,
          raw: preval`
module.exports = require('fs')
  .readFileSync(require.resolve('docs/src/pages/demos/text-fields/InputAdornments'), 'utf8')
`,
        },
        'pages/demos/text-fields/FilledInputAdornments.js': {
          js: require('docs/src/pages/demos/text-fields/FilledInputAdornments').default,
          raw: preval`
module.exports = require('fs')
  .readFileSync(require.resolve('docs/src/pages/demos/text-fields/FilledInputAdornments'), 'utf8')
`,
        },
        'pages/demos/text-fields/OutlinedInputAdornments.js': {
          js: require('docs/src/pages/demos/text-fields/OutlinedInputAdornments').default,
          raw: preval`
module.exports = require('fs')
  .readFileSync(require.resolve('docs/src/pages/demos/text-fields/OutlinedInputAdornments'), 'utf8')
`,
        },
        'pages/demos/text-fields/Inputs.js': {
          js: require('docs/src/pages/demos/text-fields/Inputs').default,
          raw: preval`
module.exports = require('fs')
  .readFileSync(require.resolve('docs/src/pages/demos/text-fields/Inputs'), 'utf8')
`,
        },
        'pages/demos/text-fields/FormattedInputs.js': {
          js: require('docs/src/pages/demos/text-fields/FormattedInputs').default,
          raw: preval`
module.exports = require('fs')
  .readFileSync(require.resolve('docs/src/pages/demos/text-fields/FormattedInputs'), 'utf8')
`,
        },
        'pages/demos/text-fields/CustomizedInputs.js': {
          js: require('docs/src/pages/demos/text-fields/CustomizedInputs').default,
          raw: preval`
module.exports = require('fs')
  .readFileSync(require.resolve('docs/src/pages/demos/text-fields/CustomizedInputs'), 'utf8')
`,
        },
        'pages/demos/text-fields/CustomizedInputBase.js': {
          js: require('docs/src/pages/demos/text-fields/CustomizedInputBase').default,
          raw: preval`
module.exports = require('fs').readFileSync(
  require.resolve('docs/src/pages/demos/text-fields/CustomizedInputBase'), 'utf8')
`,
        },
        'pages/demos/text-fields/InputWithIcon.js': {
          js: require('docs/src/pages/demos/text-fields/InputWithIcon').default,
          raw: preval`
module.exports = require('fs')
  .readFileSync(require.resolve('docs/src/pages/demos/text-fields/InputWithIcon'), 'utf8')
`,
        },
      }}
    />
  );
}

export default Page;
