Components
----------

### Layout

#####1. Container
```html
<div class="container">
  <!-- content -->
</div>
```
> Contain the main content in the center of the page

  
-------

#####2. Grid
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
        
To defines the breakpoints of a column: ``col [breakpoints][columns]``

- ``breakpoints`` => ``sm | md | lg | xl`` 
- ``columns`` => ``0 - 12``

| Breakpoints      | Value          | Device      |
| :--------------: | :------------: | :---------: |
| sm (small)       | &#8804; 668px  | Mobile      |
| md (medium)      | &#8804; 992px  | Tablet      |
| lg (large)       | &#8804; 1200px | Screen (PC) |
| xl (extra-large) | \> 1200px      | Extra       |

> The number of columns and the breakpoints can be modified from ``components/_variables.scss``

###### Actions:
- Use ``offset-[breakpoints][columns]`` to offset an element of *x* column(s)
- Use ``push-[breakpoints][columns]`` to push an element of *x* column(s)
- Use ``pull-[breakpoints][columns]`` to pull an element of *x* column(s)

  
-------

Work in progress...