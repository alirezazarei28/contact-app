
# Contacts-App

Simple application that shows contacts of a user,  built with `React`, `Typescript`, and `CSS`.


## Demo

here you can see the [demo](https://contacts-app-git-main-alirezazarei28.vercel.app/)

## Run the project

You will need node and npm installed on your machine to run the project



Clone the project:

```bash
git clone https://github.com/alirezazarei28/contacts-app
```

Go to the project directory

```bash
cd contacts-app
```

Install dependencies

```bash
npm i
```

Start the server

```bash
npm start
```

and in another terminal

```bash
npm run sass
```

finally visit `localhost:3000` in your browser
## Description

I used `create-react-app` for initializing the project.

I had an assumption that we get all the contacts of a user on first load from this api:

```bash
https://randomuser.me/api/?results=100&nat=us
```
I added two query param for simplicity, first I get a constant number of 100 contacts with query param `results=100` and all contacts have US nationality with this query param `nat=us`

##Environment Variable 
There is one Env Variable: 

```bash 
REACT_APP_API_URL=https://randomuser.me/api/?results=100&nat=us
```

## CSS

it's written utilizing `SCSS` and `BEM` style. 
## Tab Component
I built a Tab component for this project which is in `/src/components/Tab` directory 

I used `Compound Pattern` for this building component, Compound components are a pattern in which components are used together such that they share an implicit state that lets them communicate with each other in the background.

Using this pattern allows us to use the component like this: 

```JSX
<Tabs> 
    <Tab    
        label={"A"}  
        subLabel={10}  
    >
        <CustomComponent /> //renders when this tab is active
    </Tab>
     <Tab    
        label={"B"}    
        subLabel={0} 
    >
        <AnotherCustomComponent />
    </Tab>
</Tabs>
```


## Tab Component Panes Style

This is another approach for building Tab Component based on preparing data as Tab Component want it to be like and then feed that to component, it's in `/src/components/Tab-panes-style`

```JSX
 <Tabs panes={panes} />
```

and panes are: 

```JSX
const panes = {
        label: "",
        length: "",
        component: () => (
          <CustomComponet />    //renders when tab is active
        ),
      };
```

this approach has not been used in the project because I think Compound Pattern is more clear.
## Modal Component

I built the modal Component by utilizing React Portal.
In `index.html` file in public directory there is another `div` element beside the root which is used for rendering the modal

```html
<div id="root"></div>
<div id="modal-root"></div>

```

React Ref is needed for using this component:

```JSX
const someComponent = () => {
    const modal = useRef(null);

    const openModal = () => {
     modal.current.open();
  };

  return (
    <>
        <button onClick={openModal} />
        <Modal ref={modal}>
            <CustomComponent />     //renders inside the modal
        </Modal>
    </>
  )
}
```

Modal will be closed with clicking on it's close button, Escape and mouse click on area outside the modal.

## Build and Deploy
I used `create-react-app` built-in build script and `Vercel` for deploying. 

Build the project

```bash
npm run build
```

after connecting the repository to Vercel account pushing to `main` branch will start a build and deploy pipeline.

## info

- name: Alireza Zarei
- email: alirezazarei28@gmail.com
- position: frontend developer
