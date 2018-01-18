Layout
======
#### Container
```html
<div class="container">
  <!-- content -->
</div>
```
> Contain the main content in the center of the page
    

#### Grid
```html
<div class="row">
  <div class="col sm12 md7 lg8 xl9">
    <!-- content -->
  </div>
  <div class="col sm12 md7 lg8 xl9">
    <!-- content -->
  </div>
</div>
```
> Creates a responsive grid system of 12 columns.
        
To defines the size of a column: ``col [prefix][columns]``
- ``prefix`` => ``sm | md | lg | xl`` 
- ``columns`` => ``0 - 12``

| Device      | Prefix           | Value (default) | 
| :---------: | :--------------: | :-------------: | 
| Mobile      | sm (small)       | &#8804; 668px   | 
| Tablet      | md (medium)      | &#8804; 992px   | 
| Screen (PC) | lg (large)       | &#8804; 1280px  | 
| Extra       | xl (extra-large) | \> 1280px       | 

> The number of columns and the breakpoints can be modified from ``components/_variables.scss``

###### Actions:
 - Use ``offset-[prefix][columns]`` to offset an element of *x* column(s)
 - Use ``push-[prefix][columns]`` to push an element of *x* column(s)
 - Use ``pull-[prefix][columns]`` to pull an element of *x* column(s)
> Actions should be placed after the breakpoints.

Colors
======

#### Text
Syntax: ``text-[color] [shade]``
```html
<p class="text-cyan">
  <!-- content -->
</p>
<p class="text-cyan lighten-2">
  <!-- content -->
</p>
<p class="text-cyan darken-4">
  <!-- content -->
</p>
```

#### Background
Syntax: ``bg-[color] [shade]``
```html
<p class="bg-teal accent-3">
  <!-- content -->
</p>
```
> Refer to the [Material color palette][1].

***

Work in progress...

[1]: https://material.io/guidelines/style/color.html#color-color-palette