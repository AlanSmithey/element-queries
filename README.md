# element-queries
The tiny script that adds ability to modules to detect their width in layout grid.

## How-to-use:

* Concatenate script with your other files, and run it after page has been loaded.
* Add class **col** (or change for more appropriate name) to containers of each module.
* Now you can change styles of the modules with a simple set of parent **[data-media=mob|pad|dsc|dscx]** selectors:
  * **mob** - width is lower then or equal **599** pixels
  * **pad** - width is beetween **600** and **899** pixels
  * **dsc** - width is beetween **900** and **1199** pixels
  * **dscx** - width is greater then or equal **1200** pixels
