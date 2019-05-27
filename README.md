<h1>office Dashboard</h1>
A single page Application that presents information and data on over 1000 male and female working different jobTitle in a way that allows the user to easily analyse the data to draw their own conclusions.

The page uses the D3.js library with the DC.js and crossfilter.js libraries to present the data via a series of pie charts, bar/row charts, and line charts, all designed to convey the maximum amount of information in the simplest and cleanest way possible.

Finally, the page allows the user to view the individual jobTitles via a dropdown list which allows you to see the remaining jobTitle after filters have been applied, or to pick out an individual job and see just their data separate to the rest.

The current deployed version can be found at https://github.com/ahsin59/office_dashboard_milestone2

UX
This dashboard is aimed at users who wish to analyse a large amount of data related toJob-Titles and allow them to manipulate it in a way of their choosing and finally, be able to get to the specific data they require.

The journey from seeing the whole data set on screen to either being able to see a specific jobTitle, or analyse the data filtered in a way of the users choosing should be straight-forward and intuitive for the user to findout the different jobTitles with genders .

User Stories
As a user, I want to be able to view data on a number of jobTitle in different gender, without the need for swapping between multiple tabs and data sources.
As a user, I want to be able to view data on an individual jobTitle and see information such as gender, gender balance, Average Bonus, Jobtitle distribution, and so on.
As a user, I want to be able to see which jobTitle are the most highly paid amongst the jobTitles as a whole.
As a user, I want to be able to compare the data at various levels of detail, and to look for connections between the different Jobtitle distribution - for example, does gender have show the perfEval per person per age with per person bonus.
As a user, I want to be able to draw my own conclusions from the data, for example, IT with bonus per person are more likely to have earn more bonus other then different jobTitles.
As a user, I want to be able to easily reset the data and start over, and not have to worry about manually setting all the values back to their original values.
Wireframes
The wireframes (mobile & desktop) were created at the beginning of the project. Whilst they are similar to the final product, they do differ in that the final site displays more data visualization elements than the original wireframes showed.

The final wireframe was put together part way through the project when I could better visualise what I wanted and is a lot closer to the final result it contain the 11 png file to description of project step by step.
![p1](https://user-images.githubusercontent.com/38302279/57182846-59ad6480-6e9c-11e9-8562-e4820c96317f.png)
![p2](https://user-images.githubusercontent.com/38302279/57182847-59ad6480-6e9c-11e9-9c3a-c2bbeede5e0f.png)
![p3](https://user-images.githubusercontent.com/38302279/57182848-5a45fb00-6e9c-11e9-968c-2f3173c4a8d1.png)
![P4](https://user-images.githubusercontent.com/38302279/57182849-5a45fb00-6e9c-11e9-8b13-c69254b92fb1.png)
![P5](https://user-images.githubusercontent.com/38302279/57182851-5ade9180-6e9c-11e9-8638-5523fb1a541b.png)
![P6](https://user-images.githubusercontent.com/38302279/57182852-5ade9180-6e9c-11e9-9b23-a76efc35c5e8.png)
![p3](https://user-images.githubusercontent.com/38302279/57182848-5a45fb00-6e9c-11e9-968c-2f3173c4a8d1.png)
![P6](https://user-images.githubusercontent.com/38302279/57182852-5ade9180-6e9c-11e9-9b23-a76efc35c5e8.png)
![p9](https://user-images.githubusercontent.com/38302279/57183021-e78a4f00-6e9e-11e9-9bf4-c9a92330ee41.png)
![p10](https://user-images.githubusercontent.com/38302279/57183022-e78a4f00-6e9e-11e9-8461-2d30dc8002b4.png)
![p11](https://user-images.githubusercontent.com/38302279/57183321-0094ff00-6ea3-11e9-8523-53cbe1cd75f9.png)




<h3>Features</h3>
<h4>Current Features</h4>
<h5>Feature 1 - Top title bar with Reset Filters button</h5>
The top bar contains the name of the site and also a button that when clicked, resets all the filters back to their default values.
The bar is fixed to the top of the page so even when the user scrolls down, the user can quickly and easily reset the filters at any point. This avoids the need for constant scrolling up and down the page.
<h5>Feature 2 - Footer</h5>
A simple footer with a link to the original dataset on kaggle. Also contains a copyright notice and a link to my GitHub page.
<h5>Feature 3 - Introduction</h5>
This section contains a very brief introduction to what the site offers the user, alongside some basic instructions. This is kept intentionally brief to allow the UI to guide the user.
<h5>Feature 4 - Dropdown Filters</h5>
The 'filter by jobTitle' dropdown does just that, it allows the user to see all the jpbTitles in the list, dependent upon applied filters. It also allows the user to select a specific hero to view in average Bonus per gender.
The 'filter data by gender' dropdown is also self-explanatory and gives the user the option to apply this filter early in the process.
<h5>Feature 5 - Pie Charts</h5>
There are 3 pie charts, all displaying different data, they are - show per perfEval, show per person ahe, and show per person bonus. As instructed in the introduction, the user can click on the individual pie slices to filter the data how they choose.
To avoid clutter and improve readability, the pie charts only shows the most common entries for perfEval and bonus per gender. The ones that are not shown are grouped into their own section at the end, called others.
<h5>Feature 6 - Bar Charts</h5>
As with t    The barChart comprised with Gender balance,Average Bonus and jobTitle Distribution.
<h4>Rearrangeable sections</h4>
As it stands, you can close all sections down to just display its header, but I would like to take this one step further and have it so you can manually rearrange the individual sections in any order you choose, anywhere on the page. This would make it even easier to directly compare the data.
Separate section to display an individual jobTitles
Currently, to view an individual jobTitles, the user only needs to select that jobTitle from the drop down, then all elements will change to display just that jobTitles .
Technologies Used
The following technologies were used in the design and build of this project.

<h3>Wireframes </h3>

<h5>Wireframes was used for creating the wireframes during the design stage.</h5>
<h3>HTML5 & CSS3</h3>
HTML5 & CSS3 were used to create the layout and styling of this site
Code validators were used to check for errors with the HTML and CSS 
Cloud9
Cloud9 IDE editor used to write the HTML, CSS and JavaScript.
<h3>Bootswatch</h3>
Bootswatch 3.4.1 (Spacelab theme for bootstrap 3) was used to assist in the creation of the responsive grid structure for the site and also to provide some basic CSS styling.
<h3>JavaScript</h3>
JavaScript and selected external libraries have been used throughout this site, in the following ways:
For the creation and manipulation of the data-visualization elements, JavaScript and the following libraries were used
<h3>D3.js</h3>
<h3>DC.js</h3>
<h3>Crossfilter.js</h3>
D3-queue.js was used to load the dataset fully before running any other files.
jQuery was used to assist with DOM manipulation when resetting filters and showing / hiding selected sections.
JSHint was used to check for errors and code quality.
<h3>Graph.js</h3>
Graph.js file create all charts in the  office Dashboard project barchart and pie chart.
<h3>Backgroung image</h3>
Background image i get from google .
<h3>Font Awesome</h3>
Font Awesome was used to provide the icons for the GitHub logo in the site footer, the gender icons used in the gender section, and the caret icon used to show/hide individual sections.
<h3>Git & GitHub</h3>
Git used for version control. GitHub used as a remote repository and the hosting of this site.
Testing
The site has been thoroughly tested in many ways. The JavaScript and its associated functions have all undergone extensive manual testing. A write up of this, along with the results, can be found here.

The responsiveness and correct displaying of all elements has been tested on a number of devices, browsers, and resolutions. Chrome, Firefox, Opera, Safari, Edge, and IE all display without issue.

There was one issue with IE which was fixed and is discussed in the JS testing section.

There was an issue with the opera browser that caused the last element on each row of 2 or more elements to be pushed down on to an additional row. After doing some research I could see this was not uncommon in opera  and the fix I settled on was to target all bootstrap 'col-' classes and apply a negative left and right margin of -.3px.

Chrome dev tools were used to simulate multiple devices and widths, and no issues were encountered.

<h3>The following physical devices tested with no issues found.</h3>

<h5>Windows desktop at HD, QHD, and UWQHD resolutions</h5>
<h5>Google Pixel 2XL</h5>
<h5>Apple iPhone 8S</h5>
<h5>Apple iPhoeX</h5>
The site has been tested against all user stories listed in the UX section above. I was able to do everything the user would want to be able to do. I was able to compare the data easily by minimizing certain sections, I could filter the specific data I needed to, I could reset all the filters if I needed to. I was able to analyse the data and draw my own conclusions as well as verify observations on the data made by others.


<h5>Deployment</h5>
The site was developed using the cloud9 IDE and uses git for version control which is then pushed to GitHub. The site is hosted on GitHub Pages and deployed there from the master branch on GitHub. There is no difference between the development version of this site, and the final version hosted on GitHub Pages.

To deploy this project, I took the following initial steps:

From my GitHub page I clicked on 'Repositories' and selected the required repository, in this case 'office -dashboard'
I then clicked on the 'settings' option, located on the top horizontal menu bar
Next, I scrolled down the page to the GitHub Pages section and located the dropdown box under 'Source'
From there I selected the 'master branch'
GitHub takes you back to the top of the page to allow you to rename the repository if desired. I kept it the same.
These steps resulted in the finished site being deployed at
                           https://github.com/ahsin59/office_dashboard_milestone2
Every subsequent push to GitHub on the master branch updates the deployed site to match.

<h5>Credits</h5>
Content
All text was written by myself. The site was designed and built in full by myself.
The source dataset was obtained from Goggle Gove.uk can be found here.
Note - The original .csv file from Govt.uk.
<h5>Media</h5>
The original unmodified background image was sourced from google image search. It has since been modified and is being used in a non-profit educational capacity.
The favicon used was generated using this Font Awesome Favicon Generator.
<h5>Acknowledgements</h5>
Chris Zielinski, my Code Institute mentor, for her invaluable advice and guidance.
<h5>The slack channel community over at Code Institute</h5>, and specifically thanks to 'jowings', 'Eventyret', and 'Niel_ci' for their help.
The dc.js documentation, or more specifically, the folks who wrote it, for making such a well-structured and easy to follow set of docs.
