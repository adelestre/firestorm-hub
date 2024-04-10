# Developer's guide

## How to write a guide

### Repository structure

You will find in this repository the `components` folder which contains everything you will need.

It contains 2 sub-folders, `shared` and `specs`.

`shared` contains every components that you can freely use such as `Paragraph`, `List` or `SpellRotation`. There's also a `core` folder which contains all the advanced logic and components used to make everything work. You shouldn't have to interact with this folder yourself.

`specs` contains everthing written in the guide. That's you, that's where you will put your work. It is organized per classes then per specs, so each got their respective space.

### Guide structure

Each guide is composed of 3 main elements, the introduction, the mythic+ section, and the raid section. You will find a folder for each in your spec folder. You will also find at the root, a `.tsx` file with the name of the spec. This file doesn't contains much, it's the starting point of the guide. It tells the browser to display the `Introduction` and then depending on the content chosen, `MythicPlus` or `Raid`. You can if you want remove the `Introduction`, but outside of that, the file isn't very interesting.

Let's go to the `Mistweaver` guide so we can understand how everything works. In each folder, you will find a `.tsx` file with the same name (capitalized). As seen previously, it will be the starting point of the section. For example in `introduction`, you can find the file `Introduction.tsx`. If you check the file, it doesn't contain much outside of written text and couple of HTML tags (which aren't really HTML since it only exists in this project and usually references the components from the `shared` folder).

Let's still dive closer in the `Introduction`. All the `import` at the top only tells the compiler where to look for the stuff used in the file. Meaning if you need to use the `Paragraph` component, you need to write `import Paragraph from '@shared/Paragraph'` at the top (it only works because `Paragraph` actually is in @shared but the path may vary). Then there's the function declaration. Since at the bottom of the file it's written `export default Introduction` it means whenever this file will be imported in another, it will simply call the function `Introduction` which is the function defined after the imports. This function only return something written between parenthesis. Almost all sections will start with a `Section` tag. I will give more detail on it in its own section but in short it creates a title and an entry in the navigation menu so people can navigate to it. the `name='Introduction'` is there to indicates what is the actual title. In react, what comes after the closing `>` are named props. It's parameters passed to the components. They can be mandatory like `name` but also optional like `CustomTitle` that comes next. Inside the `Section` tag lies a few `Paragrah` tags with text in them, and an empty `Abbreviations` tag at the end. This guy is a implemented in the same folder as `Introduction.tsx`. The idea in my guide is that everything is modulized. I created small parts that represents usually a section or sub-section and are assembled in the parent. It's one way to do, but if you are scared to get lost in all those files and folders, you are free to write everything in `Introduction`, `MythicPlus` and `Raid`. But it might become a beefy file...

So there, you should be ready to dive in ! You can start playing a bit with the first components you were showed, like `Section` and `Paragraph` and wander a bit deeper in the `Mistweaver` guide to understand better how everything is done. If you want to know more about some components, you will find all you need in the rest of this doc. I stay at your service for any question, never hesitate, I love to help !

Happy Coding !

## Section

#### Props:

- name\* : String used for the title
- CustomTitle : ReactNode. If you want to create a different title from the default one, pass it here and it will display instead.

#### Ccontent

since this component is a container, it needs to contains something. You can put anything you want. Note that any `Section` inside another `Section` will display as a sub-section, allowing to automatically style it in the guide and in the navigation menu.

## Paragraph

#### Props:

- className: [Advanced] Pass custom classes to change the styling.

#### Content

This is another container element, it is made to receive text, textual or unformatted elements such as `ItemLinks` or `img`. Note that there are components that you shouldn't put inside it and should be put outside instead, such as `List`, `Definitions`.

#### Remark

You could ask why use this and not simply put everything in `Section` directly, well, test and see what happens. (spoiler: it applies styles like a little space on top and font stuff).

## ItemLink

#### Props:

- item\* : an object containing 3 attributes : icon, name and link. As you could guess used to display the icon, the name, and make a link to wowhead. Note that for easier use, the items or the spells that are often used are put in the files `@shared/item.json` and `@shared/spells.json`so you don't have to write the same links over and over again. you can check how those files are made and how it is implemented in the Mistweaver Guide
- className: [Advanced] Pass custom classes to change the styling.
