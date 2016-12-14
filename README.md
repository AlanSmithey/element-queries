# element-queries
Tiny script that adds ability to modules to detect their width in layout grid.

## How-to-use:

* Concatenate script with your other files, and run it after initial page loaded.
* Add class **col** (or set more appropriated name) to containers of each module.
* Now you can change styles of modules with simple set of parent **[data-media=mob|pad|dsc|dscx]** selectors:
  * **mob** - width lower then or equal **639** pixels
  * **pad** - width beetween **640** and **959** pixels
  * **dsc** - width beetween **960** and **1279** pixels
  * **dscx** - width greater then or equal **1280** pixels
