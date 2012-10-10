jquery.hidpi
============

A plugin to swap images depending on whether the screen is in a HiDPI (Retina) mode.

Downsides of this approach:
* Requires Javascript.
* Can't be indexed.

It is impossible in JS to stop a browser from downloading whatever is in the `src` attribute of an image. This method leaves the `src` attribute blank and sets it after javascript executes.