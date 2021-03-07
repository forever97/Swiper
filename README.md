# Swiper

轮播图插件

1. 首先需要在html文档中引入swiper插件

```html
<script src="swiper.js"></script>
```

2. 创建一个div元素，名字自定 (插件参数中需要配置)

```html
<div id="swiper"></div>
```

3. 然后可以使用Swiper对象创建轮播图，使用者需要配置对应的参数:

| 参数    | 含义                    |
| --------- | ------------------------ |
| **name**  | 创建的div对应的名字 |
| **color**  | 边框的颜色 |
| **imgs** | 轮播图片地址 |
| **height/width** | 轮播图框的高/宽 |

使用的方式样例如下

```html
<script type="text/javascript">
    var swiper = new Swiper({
        name: "#swiper",
        color: "gold",
        imgs: ['img/1.png', 'img/2.png', 'img/3.png', 'img/4.png', 'img/5.png'],
        height: 300,
        width: 500
    })
</script>
```
