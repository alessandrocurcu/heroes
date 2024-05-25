export const rulesActionsManifest: any = [
  {
    id: '1',
    code: 'TAG',
    title: 'Change Tag',
    category: 'edit',
    isActive: true,
    description: 'Change the selected HTML tag from one type to another',
    selectorTitle: 'Select the HTML element you want to change',
    parameterTitle: 'Choose a new element type',
    parameterLabel: 'Tag',
    parameterExample: "The element doesn't need to be wrapped around angle brackets; es: h1",
    parameterFormControl: 'simpleText',
    reviewMessageSingular: 'change the HTML tag of the element targeted by',
    reviewMessagePlural: 'change the HTML tag of every element targeted by',
    reviewMessageLast: 'in',
    examplePre: '<h1 id="selected">Lorem ipsum</h1>',
    exampleAfter: '<h2 id="selected">Lorem ipsum</h2>'
  },
  {
    id: '2',
    code: 'STYLE',
    title: 'Add Style',
    isActive: true,
    category: 'edit',
    description: 'Add the <code>style</code> attribute to the selected HTML tag',
    selectorTitle: 'Select the HTML element the style tag you want to add to',
    parameterTitle: 'Define the CSS rules inside the style tag',
    parameterLabel: 'CSS rules',
    parameterExample: 'es: margin-top: 16px; background-color: red;',
    reviewMessageSingular: 'on the element targeted by',
    reviewMessagePlural: 'on every element targeted by',
    reviewMessageLast: 'add the style TAG',
    parameterFormControl: 'simpleText',
    examplePre: '<h1 id="selected">Lorem ipsum</h1>',
    exampleAfter: '<h1 id="selected" style="margin-top:10px">Lorem ipsum</h1>'
  },
  {
    id: '3',
    code: 'BEFORE',
    label: 'Create before',
    title: 'Create Before an Element',
    isActive: true,
    category: 'create',
    description: 'Insert an HTML block before the first instance of the selected HTML element',
    selectorTitle: 'Select the HTML element before which insert the HTML block',
    parameterTitle: 'Define the HTML block to insert',
    parameterLabel: 'New HTML block',
    parameterExample: 'es: <p>Lorem ipsum dolor sit amet</p>',
    reviewMessageSingular: 'create before the element targeted by',
    reviewMessagePlural: 'create before the first element targeted by',
    reviewMessageLast: 'the html block',
    parameterFormControl: 'simpleText',
    examplePre: '<h1 id="selected">Lorem ipsum</h1>',
    exampleAfter: `<p id="insertedElement">Lorem ipsum dolor sit amet</p>
<h1 id="selected">Lorem ipsum</h1>`
  },
  {
    id: '30',
    code: 'BEFORE',
    label: 'Move Before',
    title: 'Move Before an Element',
    isActive: true,
    category: 'move',
    description: 'Move an HTML element before another one',
    selectorTitle: 'Select the HTML element to move',
    parameterTitle:
      'Select the HTML element before which move the HTML element previously selected',
    parameterLabel: 'Selector',
    parameterExample: 'es: #footer',
    reviewMessageSingular: 'move before the element targeted by',
    reviewMessagePlural: 'move before the first element targeted by',
    reviewMessageLast: 'the element targeted by',
    parameterFormControl: 'simpleText',
    examplePre: '<p id="toBeMoved">Lorem ipsum dolor sit amet</p>',
    exampleAfter: `<p id="toBeMoved">Lorem ipsum dolor sit amet</p>
<h1 id="selected">Lorem ipsum</h1>`
  },
  {
    id: '4',
    code: 'AFTER',
    label: 'Create after',
    title: 'Create after an Element',
    isActive: true,
    category: 'create',
    description: 'Insert an HTML block after the first instance of the selected HTML element',
    selectorTitle: 'Select the HTML element after which insert the HTML block',
    parameterTitle: 'Define the HTML block to insert',
    parameterLabel: 'New HTML block',
    parameterExample: 'es: <p>Lorem ipsum dolor sit amet</p>',
    reviewMessageSingular: 'create after the element targeted by',
    reviewMessagePlural: 'create after the first element targeted by',
    reviewMessageLast: 'the html block',
    parameterFormControl: 'simpleText',
    examplePre: '<h1 id="selected">Lorem ipsum</h1>',
    exampleAfter: `<h1 id="selected">Lorem ipsum</h1>
<p id="insertedElement">Lorem ipsum dolor sit amet</p>`
  },
  {
    id: '32',
    code: 'AFTER',
    label: 'Move After',
    title: 'Move After an Element',
    isActive: true,
    category: 'move',
    description: 'Move an HTML element after another one',
    selectorTitle: 'Select the HTML element to move',
    parameterTitle: 'Select the HTML element after which move the HTML element previously selected',
    parameterLabel: 'Selector',
    parameterExample: 'es: #footer',
    reviewMessageSingular: 'move after the element targeted by',
    reviewMessagePlural: 'move after the first element targeted by',
    reviewMessageLast: 'the element targeted by',
    parameterFormControl: 'simpleText',
    examplePre: '<p id="toBeMoved">Lorem ipsum dolor sit amet</p>',
    exampleAfter: `<h1 id="selected">Lorem ipsum</h1>
<p id="toBeMoved">Lorem ipsum dolor sit amet</p>`
  },
  {
    id: '5',
    code: 'APPEND',
    label: 'Create at the end',
    title: 'Create at the end of an Element',
    isActive: true,
    category: 'create',
    description:
      'Insert an HTML block at the end of the first instance of the selected HTML element',
    selectorTitle: 'Select the HTML element at the end of which insert the HTML block',
    parameterTitle: 'Define the HTML block to append',
    parameterLabel: 'New HTML block',
    parameterExample: 'es: <span>Lorem ipsum dolor sit amet</span>',
    reviewMessageSingular: 'create at the end of the element targeted by',
    reviewMessagePlural: 'create at the end of the first element targeted by',
    reviewMessageLast: 'the html block',
    parameterFormControl: 'simpleText',
    examplePre: '<div id="selected">Lorem ipsum</div>',
    exampleAfter: `<div id="selected">
Lorem ipsum 
<span id="appendedElement">Lorem ipsum dolor sit amet</span>
</div>`
  },
  {
    id: '33',
    code: 'APPEND',
    label: 'Move at the end',
    title: 'Move at the end of an Element',
    isActive: true,
    category: 'move',
    description:
      'Move an HTML element at the end of the first instance of the HTML element selected',
    selectorTitle: 'Select the HTML element to move',
    parameterTitle:
      'Select the HTML element at the end of which move the HTML element previously selected',
    parameterLabel: 'Selector',
    parameterExample: 'es: #footer',
    reviewMessageSingular: 'move at the end of the element targeted by',
    reviewMessagePlural: 'move at the end of the first element targeted by',
    reviewMessageLast: 'the element targeted by',
    parameterFormControl: 'simpleText',
    examplePre: '<span id="toBeMoved">Lorem ipsum dolor sit amet</span>',
    exampleAfter: `<div id="selected">
Lorem ipsum 
<span id="toBeMoved">Lorem ipsum dolor sit amet</span>
</div>`
  },
  {
    id: '6',
    code: 'PREPEND',
    label: 'Create at the start',
    title: 'Create at the start of an element',
    isActive: true,
    category: 'create',
    description:
      'Insert an HTML block at the start of the first instance of the selected HTML element',
    selectorTitle: 'Select the HTML element at the start of which insert the HTML block',
    parameterTitle: 'Define the HTML block to prepend',
    parameterLabel: 'New HTML block',
    parameterExample: 'es: <span>Lorem ipsum dolor sit amet</span>',
    reviewMessageSingular: 'create at the start of the element targeted by',
    reviewMessagePlural: 'create at the start of the first element targeted by',
    reviewMessageLast: 'the html block',
    parameterFormControl: 'simpleText',
    examplePre: '<div id="selected">Lorem ipsum</div>',
    exampleAfter: `<div id="selected">
<span id="prependedElement">Lorem ipsum dolor sit amet</span>
Lorem ipsum 
</div>`
  },
  {
    id: '31',
    code: 'PREPEND',
    label: 'Move at the start',
    title: 'Move at the start of an element',
    isActive: true,
    category: 'move',
    description:
      'Move the selected an HTML block at the start of the first instance of the selected HTML element',
    selectorTitle: 'Select the HTML element to move',
    parameterTitle:
      'Select the HTML element at the start of which move the HTML element previously selected',
    parameterLabel: 'Selector',
    parameterExample: 'es: #footer',
    reviewMessageSingular: 'move at the start of the element targeted by',
    reviewMessagePlural: 'move at the start of the first element targeted by',
    reviewMessageLast: 'the element targeted by',
    parameterFormControl: 'simpleText',
    examplePre: '<span id="toBeMoved">Lorem ipsum dolor sit amet</span>',
    exampleAfter: `<div id="selected">
<span id="toBeMoved">Lorem ipsum dolor sit amet</span>
Lorem ipsum 
</div>`
  },
  {
    id: '7',
    code: 'WRAP',
    label: 'Create and wrap',
    title: 'Create and Wrap an Element',
    isActive: true,
    category: 'create',
    description: 'Create a new HTML element and wrap it around the selected HTML element',
    selectorTitle: 'Select the HTML element to be wrapped',
    parameterTitle: 'Define the HTML element that will wrap the previously selected element',
    parameterLabel: 'New HTML element',
    parameterExample: 'es: <article id="newElement"></article>',
    parameterFormControl: 'simpleText',
    reviewMessageSingular: 'wrap the element targeted by',
    reviewMessagePlural: 'wrap every element targeted by',
    reviewMessageLast: 'with',
    examplePre: '<div id="selected">Lorem ipsum dolor sit amet</div>',
    exampleAfter: `<article id="newElement">
<p id="selected">Lorem ipsum dolor sit amet</p>
</article>`
  },
  {
    id: '8',
    code: 'WRAP_CONTENT',
    label: 'Create and wrap content',
    title: 'Create and Wrap the Content of an Element',
    isActive: true,
    category: 'create',
    description:
      'Create a new HTML element and wrap it around the content of the selected HTML element',
    selectorTitle: 'Select the HTML element whose content will be wrapped by the new HTML element',
    parameterTitle:
      'Define the HTML element that will wrap the content of the previously selected element(s)',
    parameterLabel: 'New HTML element',
    parameterExample: 'es: <p id="newElement"></p>',
    parameterFormControl: 'simpleText',
    reviewMessageSingular: 'wrap the content of the element targeted by',
    reviewMessagePlural: 'wrap the content of every element targeted by',
    reviewMessageLast: 'with',
    examplePre: '<div id="selected">Lorem ipsum dolor sit amet</div>',
    exampleAfter: `<div id="selected">
<p id="newElement">Lorem ipsum dolor sit amet</p>
</div>`
  },
  {
    id: '9',
    code: 'DELETE',
    title: 'Delete Element',
    isActive: true,
    category: 'delete',
    description: 'Delete the selected HTML element',
    selectorTitle: 'Select the HTML element to delete',
    parameterTitle: '',
    parameterLabel: '',
    parameterExample: '',
    reviewMessageSingular: 'delete the element targeted by',
    reviewMessagePlural: 'delete every element targeted by',
    reviewMessageLast: '',
    parameterFormControl: 'noParameter',
    examplePre: `<div>
Lorem ipsum
<span id="selected">Lorem ipsum dolor sit amet</span>
</div>`,
    exampleAfter: `<div>Lorem ipsum</div>`
  },
  {
    id: '10',
    code: 'ADDCLASS',
    title: 'Add Class',
    isActive: true,
    category: 'edit',
    description: 'Add one <code>class</code> or more to the HTML element',
    selectorTitle: 'Select the HTML element to add a class to',
    parameterTitle: 'Define the classes to add',
    parameterLabel: 'Classes',
    parameterExample:
      "The name of the class doesn 't need to be prepend by the period: es. nameClass",
    parameterFormControl: 'simpleList',
    listLabel: 'Classes',
    listItemLabel: 'Class',
    reviewMessageSingular: 'to the the element targeted by',
    reviewMessagePlural: 'to every element targeted by',
    reviewMessageLast: 'add the class(es)',
    examplePre: `<h1 id="selected">Lorem ipsum</h1>`,
    exampleAfter: `<h1 id="selected" class="title">Lorem ipsum</h1>`
  },
  {
    id: '11',
    code: 'REMOVECLASS',
    title: 'Remove Class',
    isActive: true,
    category: 'edit',
    description: 'Remove one <code>class</code> or more from the HTML element',
    selectorTitle: 'Select the HTML element to remove a class from',
    parameterTitle: 'Define the classes to remove',
    parameterLabel: 'Classes',
    parameterExample:
      "The name of the class doesn 't need to be prepend by the period: es. nameClass",
    parameterFormControl: 'simpleList',
    listLabel: 'Classes',
    listItemLabel: 'Class',
    reviewMessageSingular: 'to the the element targeted by',
    reviewMessagePlural: 'to every element targeted by',
    reviewMessageLast: 'remove the class(es)',
    examplePre: `<h1 id="selected" class="title">Lorem ipsum</h1>`,
    exampleAfter: `<h1 id="selected">Lorem ipsum</h1>`
  },
  {
    id: '12',
    code: 'TEXT',
    title: 'Substitute Text',
    isActive: true,
    category: 'edit',
    description:
      'Replaces the text inside the selected HTML element with the text of another element',
    selectorTitle: 'Select the HTML element to replace the inside text',
    parameterTitle:
      'Select the HTML element whose text will replace the text of the previously selected element',
    parameterLabel: 'Selector',
    parameterExample: '',
    parameterFormControl: 'simpleText', // parText
    reviewMessageSingular: 'change the text of the element targeted by',
    reviewMessagePlural: 'change the text of every element targeted by',
    reviewMessageLast: 'with the text of the element(s) targeted by',
    examplePre: `<span id="firstSelected">Lorem ipsum</span>
    <span id="secondSelected">dolor sit amet</span>`,
    exampleAfter: `<span id="firstSelected">dolor sit amet</span>`
  },
  {
    id: '16',
    code: 'CONCATTEXT',
    title: 'Concat Text',
    isActive: true,
    category: 'edit',
    description: 'Concatenates the text of one or more HTML elements inside an HTML element',
    selectorTitle:
      'Select the HTML element within which concatenate the text of the defined HTML elements',
    parameterTitle: 'Define the elements',
    parameterLabel: 'Selector',
    parameterExample: 'es: .testOne',
    reviewMessageSingular: 'inside the element targeted by',
    reviewMessagePlural: 'inside every element targeted by',
    reviewMessageLast: 'insert the concatenated text of the elements targeted by the selector(s)',
    parameterFormControl: 'simpleList',
    listLabel: 'Selectors',
    listItemLabel: 'Selector',
    examplePre: `<p class="container">Lorem ipsum</p>
<span class="textOne">dolor sit amet</span>
<span class="textTwo">, adipisicing elit</span>`,
    exampleAfter: `<p class="container">Lorem ipsum dolor sit amet, adipisicing elit</p>`
  },
  {
    id: '17',
    code: 'HTML',
    title: 'Insert HTML or Text',
    isActive: true,
    category: 'edit',
    description:
      'Replaces the content of the HTML Element selected with the defined HTML block or text',
    selectorTitle: 'Select the HTML element within which to replace the HTML or Text',
    parameterTitle: 'Define the HTML or text to replace the content of the HTML element selected',
    parameterLabel: 'HTML block or text',
    parameterExample: 'es: <p class="red">Dolor sit amet</p>',
    reviewMessageSingular: 'replace the content of the element targeted by',
    reviewMessagePlural: 'replace the content of every element targeted by',
    reviewMessageLast: 'with the following:',
    parameterFormControl: 'simpleText',
    examplePre: `<div id="selected">Lorem ipsum</div>`,
    exampleAfter: `<div id="selected"><p id="defined">Dolor sit amet, adipisicing elit</p></div>`
  },
  {
    id: '15',
    code: 'MERGE',
    title: 'Merge',
    isActive: true,
    category: 'edit',
    description: 'Merge the HTML elements of the same type',
    selectorTitle: 'Define the element that contains the elements to merge',
    parameterTitle: 'Define the elements to merge',
    parameterLabel: 'CSS Selector',
    parameterExample: 'es: ul.test',
    reviewMessage: 'merge all the elements inside',
    reviewMessageLast: 'that have been targeted by the selector',
    parameterFormControl: 'simpleText',
    examplePre: `<div class="container">
<ul class="test"><li> Lorem ipsum</li></ul>
<ul class="test"><li> Lorem ipsum dolor sit amet</li></ul>
</div>`,
    exampleAfter: `<div class="container">
<ul class="test">
<li> Lorem ipsum</li>
<li> Lorem ipsum dolor sit amet</li>
</ul>
</div>`
  },
  {
    id: '13',
    code: 'ATTR',
    title: 'Add Attribute',
    isActive: true,
    category: 'edit',
    description: 'Add or modify the <code>attribute</code> of the HTML element selected',
    selectorTitle: 'Select the HTML element to modify or add an attribute to',
    parameterTitle: 'Define the attribute to add or modify',
    parameterLabel: 'Attribute',
    parameterExample: 'es. data-test="lorem"',
    parameterFormControl: 'simpleText',
    reviewMessageSingular: 'to the the element targeted by',
    reviewMessagePlural: 'to every element targeted by',
    reviewMessageLast: 'add or modify the attribute',
    examplePre: `<span id="selected">Lorem ipsum</span>`,
    exampleAfter: `<span id="selected" data-test="lorem">Lorem ipsum</span>`
  },
  {
    id: '14',
    code: 'REMOVEATTR',
    title: 'Remove Attribute',
    isActive: true,
    category: 'edit',
    description: 'Remove the <code>attribute</code> from the HTML element',
    selectorTitle: 'Select the HTML element to remove the attribute from',
    parameterTitle: 'Define the attribute to remove',
    parameterLabel: 'Attribute',
    parameterExample: 'es. data-test',
    parameterFormControl: 'simpleText',
    reviewMessageSingular: 'to the the element targeted by',
    reviewMessagePlural: 'to every element targeted by',
    reviewMessageLast: 'remove the attribute',
    examplePre: `<span id="selected" data-test="lorem">Lorem ipsum</span>`,
    exampleAfter: `<span id="selected">Lorem ipsum</span>`
  },
  {
    id: '20',
    code: 'COMPUTE_ATTR',
    title: 'Compute Attribute',
    isActive: true,
    category: 'edit',
    description:
      'Add or modify the <code>attribute</code> of the HTML element selected by computing a complex selection rules',
    selectorTitle: 'Select the HTML element to modify or add an attribute to',
    parameterTitle: 'Define the attribute to add or modify',
    parameterLabel: 'Attribute',
    parameterExample: 'es. _self::attr(data-test)::replace(dolor.*->dolor)',
    parameterFormControl: 'simpleText', // parCOMPUTE
    reviewMessage: 'to',
    reviewMessageLast: 'add or modify the attribute',
    examplePre: `<span id="selected" data-test="Dolor sit">Lorem ipsum</span>`,
    exampleAfter: `<span id="selected" data-test="Dolor">Lorem ipsum</span>`
  },
  {
    id: '21',
    code: 'RENAMEATTR',
    title: 'Rename Attribute',
    isActive: true,
    category: 'edit',
    description: 'Remove the <code>attribute</code> from the HTML element',
    selectorTitle: 'Select the HTML element with the attribute to rename',
    parameterTitle: 'Of the selected HTML element define the attribute to rename and the new name',
    parameterLabel: 'Attribute',
    parameterExample: '',
    parameterFormControl: 'fromToText',
    fromLabel: 'Old Attribute',
    toLabel: 'New Attribute',
    reviewMessageSingular: 'to the the element targeted by',
    reviewMessagePlural: 'to every element targeted by',
    reviewMessageLast: 'rename the attribute',
    // parameterFormControl: 'parRENATTR',
    examplePre: `<div id="selected" data-test="lorem"></div>`,
    exampleAfter: `<div id="selected" data-test-new="lorem"></div>`
  },

  {
    id: '18',
    code: 'RESIZE_IMAGES',
    title: 'Resize Images',
    isActive: true,
    category: 'edit',
    description:
      'Resize images by setting <code>width</code> and <code>height</code> or just the width (scaling proportionally)',
    selectorTitle: 'Select the image to resize',
    parameterTitle: 'Define width and height (or just the width)',
    parameterLabel: 'Dimension',
    parameterExample: 'es: 250x120 or 250',
    reviewMessageSingular: 'to the the image targeted by',
    reviewMessagePlural: 'to every image targeted by',
    reviewMessageLast: 'set the width and height (or just the width) to',
    parameterFormControl: 'simpleText',
    examplePre: `<img src="http://image-url.jpg" />`,
    exampleAfter: `<img src="http://image-url.jpg?cksizes=250x120" />`
  },
  {
    id: '23',
    code: 'IMAGES_SRCSET',
    title: 'Set Image Source',
    isActive: true,
    category: 'edit',
    description:
      'Make an image responsive by setting <code>srcset</code> and <code>sizes</code> attributes',
    selectorTitle: 'Select the IMG element to set or change the srcset and sizes attributes to',
    parameterTitle: 'Define the srcset and sizes attributes',
    parameterLabel: 'srcset and sizes attributes',
    parameterExample:
      'es: {"widths": ["320w", "480w", "800w"], "sizes": "(max-width: 320px) 280px, (max-width: 480px) 440px, 800px"}',
    reviewMessageSingular: 'to the the image targeted by',
    reviewMessagePlural: 'to every image targeted by',
    reviewMessageLast: 'set the srcset and sizes attributes to',
    parameterFormControl: 'simpleText',
    examplePre: `<img id="selected"
src="example-800w.jpg" alt="An Example">`,
    exampleAfter: `<img srcset="example.jpg 320w, example-480w.jpg 480w, example-800w.jpg 800w"
sizes="(max-width: 320px) 280px, (max-width: 480px) 440px, 800px"
src="example-800w.jpg" alt="An Example">`
  },
  {
    id: '19',
    code: 'GRAB',
    title: 'Grab',
    isActive: true,
    category: 'edit',
    description: 'Inserts an HTML block taken from a specific URL within the selected element',
    selectorTitle: 'Select the HTML element at the end of which insert the grabbed HTML block',
    // parameterTitle: 'Define the URL where to grab the element and select the element to grab',
    parameterTitle: 'Define complex JSON',
    parameterLabel: 'Attribute',
    parameterExample: 'Advanced',
    parameterFormControl: 'simpleText',
    fromLabel: 'URL',
    toLabel: 'Selector',
    reviewMessageSingular: 'coming soon',
    reviewMessagePlural: '',
    reviewMessageLast: '',
    examplePre: `<div id="selected"></div>
<div class="toGrabFromDifferentURL">Lorem ipsum</div>`,
    exampleAfter: `<div id="selected">
<div class="grabbed">Lorem ipsum</div>
</div>`
  },

  {
    id: '22',
    code: 'CLONE_INTO',
    title: 'Copy Element',
    isActive: true,
    category: 'copy',
    description:
      'Clone an element and paste it at the end of the first occurence of another element ',
    selectorTitle: 'Select the HTML element to clone',
    parameterTitle: 'Select the HTML element whithin which paste the cloned element',
    parameterLabel: 'Selector',
    parameterExample: 'es. .test"',
    parameterFormControl: 'simpleText',
    reviewMessageSingular: 'clone the element targeted by',
    reviewMessagePlural: 'clone every element targeted by',
    reviewMessageLast: 'and paste it at the end of the first occurence of the element targeted by',
    examplePre: `<div class="toClone">ipsum</div>
<div class="toPasteInto">Lorem</div>`,
    exampleAfter: `<div class="toClone">ipsum</div>
<div class="toPasteInto">Lorem ipsum</div>`
  },

  {
    id: '24',
    code: 'APPEND_URL',
    title: 'Append URL',
    isActive: true,
    category: 'edit',
    description: 'coming soon',
    selectorTitle: 'Select the anchor to modify',
    parameterTitle: 'JSON to configure',
    parameterLabel: 'JSON',
    parameterExample: '',
    parameterFormControl: 'simpleText',
    reviewMessageSingular: 'coming soon',
    reviewMessagePlural: '',
    reviewMessageLast: '',
    examplePre: `coming soon`,
    exampleAfter: `coming soon`
  },
  {
    id: '25',
    code: 'PAGINATE',
    title: 'Paginate',
    isActive: true,
    category: 'edit',
    description: 'coming soon',
    selectorTitle: 'Select the element to modify',
    parameterTitle: 'JSON to configure',
    parameterLabel: 'JSON',
    parameterExample: '',
    parameterFormControl: 'simpleText',
    reviewMessageSingular: 'coming soon',
    reviewMessagePlural: '',
    reviewMessageLast: '',
    examplePre: `coming soon`,
    exampleAfter: `coming soon`
  },
  {
    id: '26',
    code: 'BEFORE_EACH',
    label: 'Create before each',
    title: 'Insert before each element',
    isActive: true,
    category: 'create',
    description: 'Insert an HTML block before every occurrence of the selected HTML element',
    selectorTitle: 'Select the HTML elements before which insert the HTML block',
    parameterTitle: 'Define the HTML block to insert',
    parameterLabel: 'New HTML block',
    parameterExample: 'es: <p>Lorem ipsum dolor sit amet</p>',
    reviewMessageSingular: 'create before the element targeted by',
    reviewMessagePlural: 'create before every element targeted by',
    reviewMessageLast: 'the html block',
    parameterFormControl: 'simpleText',
    examplePre: `<h2 class="selected">Lorem ipsum</h1>`,
    exampleAfter: `<p id="insertedElement">Lorem ipsum dolor sit amet</p>
<h1 id="selected">Lorem ipsum</h1>`
  },
  {
    id: '34',
    code: 'BEFORE_EACH',
    label: 'Copy Before Each',
    title: 'Copy Before each Element',
    isActive: true,
    category: 'copy',
    description: 'Copy an HTML element before every occurrence of another one',
    selectorTitle: 'Select the HTML elements to copy',
    parameterTitle:
      'Select the HTML element before which copy the HTML elements previously selected',
    parameterLabel: 'Selector',
    parameterExample: 'es: #footer',
    reviewMessageSingular: 'copy before the element targeted by',
    reviewMessagePlural: 'copy before every element targeted by',
    reviewMessageLast: 'the element targeted by',
    parameterFormControl: 'simpleText',
    examplePre: '<p id="toBeCopied">Lorem ipsum dolor sit amet</p>',
    exampleAfter: `<p id="toBeCopied">Lorem ipsum dolor sit amet</p>
<h1 id="selected">Lorem ipsum</h1>`
  },

  {
    id: '27',
    code: 'AFTER_EACH',
    label: 'Create after each',
    title: 'Create after each element',
    isActive: true,
    category: 'create',
    description: 'Insert an HTML block after every occurrence of the selected HTML element',
    selectorTitle: 'Select the HTML elements after which insert the HTML block',
    parameterTitle: 'Define the HTML block to insert',
    parameterLabel: 'New HTML block',
    parameterExample: 'es: <p>Lorem ipsum dolor sit amet</p>',
    reviewMessageSingular: 'create after the element targeted by',
    reviewMessagePlural: 'create after every element targeted by',
    reviewMessageLast: 'the html block',
    parameterFormControl: 'simpleText',
    examplePre: `<div class="test"></div>
<div class="container">Lorem ipsum</div>`,
    exampleAfter: `<div class="test">
<div class="container">Lorem ipsum</div>
</div>`
  },
  {
    id: '35',
    code: 'AFTER_EACH',
    label: 'Copy After each',
    title: 'Copy after each Element',
    isActive: true,
    category: 'copy',
    description: 'Copy an HTML element after every occurrence of another one',
    selectorTitle: 'Select the HTML elements to copy',
    parameterTitle:
      'Select the HTML element after which copy the HTML elements previously selected',
    parameterLabel: 'Selector',
    parameterExample: 'es: #footer',
    reviewMessageSingular: 'copy after the element targeted by',
    reviewMessagePlural: 'copy after every element targeted by',
    reviewMessageLast: 'the element targeted by',
    parameterFormControl: 'simpleText', // Dovrebbe essere una text-area
    examplePre: '<p id="toBeCopied">Lorem ipsum dolor sit amet</p>',
    exampleAfter: `<h1 id="selected">Lorem ipsum</h1>
<p id="toBeCopied">Lorem ipsum dolor sit amet</p>`
  },
  {
    id: '28',
    code: 'APPEND_EACH',
    label: 'Create at the end of each',
    title: 'Create at the end of each Element',
    isActive: true,
    category: 'create',
    description: 'Insert an HTML block at the end of every occurence of the selected HTML element',
    selectorTitle: 'Select the HTML elements at the end of which insert the HTML block',
    parameterTitle: 'Define the HTML block to append',
    parameterLabel: 'New HTML block',
    parameterExample: 'es: <span>Lorem ipsum dolor sit amet</span>',
    reviewMessageSingular: 'create at the end of the element targeted by',
    reviewMessagePlural: 'create at the end of every element targeted by',
    reviewMessageLast: 'the html block',
    parameterFormControl: 'simpleText',
    examplePre: '<div id="selected">Lorem ipsum</div>',
    exampleAfter: `<div id="selected">
Lorem ipsum 
<span id="appendedElement">Lorem ipsum dolor sit amet</span>
</div>`
  },
  {
    id: '36',
    code: 'APPEND_EACH',
    label: 'Copy at the end of each',
    title: 'Copy at the end of each Element',
    isActive: true,
    category: 'copy',
    description: 'Copy an HTML element at the end of every occurence of the selected HTML element',
    selectorTitle: 'Select the HTML element to copy',
    parameterTitle:
      'Select the HTML element at the end of which copy the HTML element previously selected',
    parameterLabel: 'Selector',
    parameterExample: 'es: #footer',
    reviewMessageSingular: 'copy at the end of the element targeted by',
    reviewMessagePlural: 'copy at the end of every element targeted by',
    parameterFormControl: 'simpleText',
    examplePre: '<span id="toBeCopied">Lorem ipsum dolor sit amet</span>',
    exampleAfter: `<div id="selected">
Lorem ipsum 
<span id="toBeCopied">Lorem ipsum dolor sit amet</span>
</div>`
  },
  {
    id: '29',
    code: 'PREPEND_EACH',
    label: 'Create at the start of each',
    title: 'Create at the start of each element',
    isActive: true,
    category: 'create',
    description:
      'Insert an HTML block at the start of every occurence of the selected HTML element',
    selectorTitle: 'Select the HTML element at the beginning of which insert the HTML block',
    parameterTitle: 'Define the HTML block to prepend',
    parameterLabel: 'New HTML block',
    parameterExample: 'es: <span>Lorem ipsum dolor sit amet</span>',
    reviewMessageSingular: 'create at the start of the element targeted by',
    reviewMessagePlural: 'create at the start of every element targeted by',
    reviewMessageLast: 'the html block',
    parameterFormControl: 'simpleText',
    examplePre: '<div id="selected">Lorem ipsum</div>',
    exampleAfter: `<div id="selected">
<span id="prependedElement">Lorem ipsum dolor sit amet</span>
Lorem ipsum 
</div>`
  },
  {
    id: '37',
    code: 'PREPEND_EACH',
    label: 'Copy at the start of each',
    title: 'Copy at the strat of an element',
    isActive: true,
    category: 'copy',
    description:
      'Copy the selected elements at the start of every occurence of the selected HTML element',
    selectorTitle: 'Select the HTML elements to copy',
    parameterTitle:
      'Select the HTML element at the start of which copy the HTML elements previously selected',
    parameterLabel: 'Selector',
    parameterExample: 'es: #footer',
    reviewMessageSingular: 'copy at the start of the element targeted by',
    reviewMessagePlural: 'copy at the start of every element targeted by',
    parameterFormControl: 'simpleText',
    examplePre: '<span id="toBecopied">Lorem ipsum dolor sit amet</span>',
    exampleAfter: `<div id="selected">
<span id="toBeCopied">Lorem ipsum dolor sit amet</span>
Lorem ipsum 
</div>`
  },
  {
    id: '38',
    code: 'COMPUTE_HTML',
    title: 'Compute HTML',
    isActive: true,
    category: 'edit',
    description: 'Replaces the content of the HTML Element selected with the extracted HTML block',
    selectorTitle: 'Select the HTML element',
    parameterTitle:
      'Insert an advanced extraction expression that will replace the inner html of the previously selected element',
    parameterLabel: 'Selector',
    parameterExample: '.otherdiv::html::replace(<br>-><hr>)',
    parameterFormControl: 'simpleText', // parText
    reviewMessageSingular: '???',
    reviewMessagePlural: '???',
    reviewMessageLast: '???',
    examplePre: `<div id="selected">Lorem ipsum</div>`,
    exampleAfter: `<div id="selected"><p id="defined">Dolor sit amet, adipisicing elit</p></div>`
  }
];
