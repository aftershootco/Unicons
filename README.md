<div align="center">
    <img src="https://i.imgur.com/buSetTc.png" alt="Unicorn Design System">
    <h1>Unicorn Icons</h1>
    <strong>Unicorn Icons is Aftershoot's inbuilt library for using different icons with custom configurations in their Desktop app.</strong>
</div>
<br>
<div align="center">
    <a href="https://github.com/aftershootco/Unicorn-Design-System/blob/develop-readme/LICENSE.md">
        <img src="https://img.shields.io/badge/License-Apache_2.0-blue.svg" alt="License">
    </a>
    <a href="https://twitter.com/aftershootco?lang=en">
        <img src="https://img.shields.io/twitter/follow/aftershootco?label=Twitter&style=flat&logo=twitter&color=1DA1F2" alt="Aftershoot Twitter">
    </a>
</div>

## How to Build?

1. Get the lastest pull

```sh
git pull
```

2. Install all the dependencies

```sh
yarn
```

3. Now build it.

```sh
yarn build
```

## How to generate automatically

1. Put all the SVGs in /src/svg

2. Run `sh generate.sh`.
   This will generate a /test and /test-stories with icon components,
   as well as the stories.

3. Once, tested and satisfied, move the component and stories
   in the right folders (icons or stories)

    You are all set

## Using icon components Tips

1. Import from '@aftershootco/unicorn-icons'

2. Props - size, color, fillColor (icons with fill), variant (if icon have more than one variant), bgColor (icon with bg), inActive (make icon color dull, this will have more priority than color props)

3. on hover effect example

    ```js
    <button className='group' onClick={props.onClose}>
    	<CloseIcon size={14} color='#777777' className='group-hover:[&_*]:fill-white group-hover:[&_*]:stroke-white' />
    </button>
    ```

## Contributors

-   Akash Singh — [Github](https://github.com/frannkenstein)
-   Yash Johri — [Github](https://github.com/yash1200)
-   Booi Mangang - [Github](https://github.com/booi-dev)
