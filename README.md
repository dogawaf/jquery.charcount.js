#jquery charCount
##Simple dynamic character count for a textarea

charCount indicates to the user how many chars he types in a textarea.
If the user goes beyond a given limit, an error class can be added to a container.
If the user is close to the limit, a warning class can be added to the counter.

##Usage

```javascript
$('textarea').charCount({
	counterText: 'Remaining: '
});
```

##Options

```javascript
// default configuration properties
{
	allowed: 500, // number of chars when the error class will be added to errorWrapperSelector
	warning: 10, // number of chars behind the limit when the warning class will be added to the counter
	cssWarning: 'warning', // warning classname
	cssExceeded: 'error', // error classname
	counterText: '', // this text will be prepended to the counter
	errorWrapperSelector: '.input' // jQuery selector of the element which the error class will be added
}
```

##Licence
Released under the WTFPL license - [http://sam.zoy.org/wtfpl/]

