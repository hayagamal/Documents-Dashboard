# Documents Usage Dashboard
This project shows a complete analysis of user's documents usage in terms of charts. Implemented using ReactJs and styled using styled components.

## Screenshot
![yes](https://user-images.githubusercontent.com/50046177/202928969-87637e8e-b337-4234-a225-71ca1a4a18c3.png)




## How to use
- Clone the repo.
- Run using Visual Studio Code "npm start".
- You can start experimenting using this link once the folder runs: ``` http://localhost:3000/ ```

## Implementation Notes
- Data from shared folder is imported in 'Home.jsx' which is the main component, and passed as props to its child components. Except for donut chart's data is included within the component as it is dependent on props passed to this component.
### Sidebar
- Both brand logo and thumbs up were changed as only those replacements were found for better resolution (instead of taking screenshots of the original one).
- Each Navlink routes to it's correct path.
- Animations are added when hovering on Brand logo and thumbs up sticker(scaling up to 1.1).
### Storage Details
- The correct calculations were done to show the storage percentage of each folder type corresponding to the total 128 Gigabytes available.
-  Animations are added when hovering on each folder's data (scaling up to 1.1).
### Analytics
- Fake data was put as options and series as actual data was not provided.


