
# Introduction to CSS


### So what is CSS?
CSS is Cascading Style Sheet, used to style web page.


### CSS Syntax
A CSS consists of a selector and a declaration block.
```for example
h1 {
    color: red;
    font-size:12px; 
}
```
- Selector -> h1
- Declaration -> color: red
    - Property -> color
    - Value -> red

### CSS Selectors

CSS selectors are used to "find" (or select) the HTML elements you want to style.

#### The CSS element Selector

```
p {
  text-align: center;
  color: red;
}
```

#### The CSS id Selector

```
#statement {
  text-align: center;
  color: red;
}
```


#### The CSS class Selector

```
.text-right {
  text-align: right;
  color: red;
}
```


#### The CSS Universal Selector

```
* {
  margin: 0;
  padding: 0;
  font-family: sans-serif;
}
```

#### The CSS Grouping Selector

Ex: Without grouping
```
h1 {
  text-align: center;
  color: red;
}

h2 {
  text-align: center;
  color: red;
}

p {
  text-align: center;
  color: red;
}
```

Ex: With grouping

```

h1, h2, p {
  text-align: center;
  color: red;
}
```


### How To Add CSS
There are three ways of inserting a style sheet:
 
- Inline CSS
- Internal CSS
- External CSS


### CSS Basics

- Borders
The CSS border properties allow you to specify the style, width, and color of an element's border.
```
h1.dotted {border-style: dotted;}
h1.dashed {border-style: dashed;}
h1.solid {border-style: solid;}
```
- Margins
Margins are used to create space around elements, outside of any defined borders.

    Margin - Individual Sides
    CSS has properties for specifying the margin for each side of an element:

    margin-top
    margin-right
    margin-bottom
    margin-left

- Padding

- Size (Width/Height)


#### CSS Box Model

- Content - The content of the box, where text and images appear
- Padding - Clears an area around the content. The padding is transparent
- Border - A border that goes around the padding and content
- Margin - Clears an area outside the border. The margin is transparent


CSS links


CSS Lists

```
ul.a {
  list-style-type: circle;
}

ul.b {
  list-style-type: square;
}

ol.c {
  list-style-type: upper-roman;
}

ol.d {
  list-style-type: lower-alpha;
}
```