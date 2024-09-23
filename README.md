# MMM-SimpleDictionary
MagicMirror module to display translation using external API 

## Installation

In the terminal, go to your's MagicMirror intsallation folder and execute the following command:

```
cd modules
```

Clone this repository

```
git clone https://github.com/yaliaksei/MMM-SimplDictionary.git
```

## Usage and config

Add following module configuration in config.js

```
...
        {
			module: "MMM-SimpleDictionary",
			position: "top_left", // any poisition of your choice
			config: {
				api: <PATH_TO_DICTIONARY_API>, // API that returns translation pair (not part of the module)
			}
		},
...
```
