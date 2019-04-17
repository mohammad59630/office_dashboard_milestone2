<h1>office Dashboard</h1>
A single page Application that presents information and data on over 1000 male and female working different jobTitle in a way that allows the user to easily analyse the data to draw their own conclusions.

The page uses the D3.js library with the DC.js and crossfilter.js libraries to present the data via a series of pie charts, bar/row charts, and line charts, all designed to convey the maximum amount of information in the simplest and cleanest way possible.

Finally, the page allows the user to view the individual super-heroes via a dropdown list which allows you to see the remaining heroes after filters have been applied, or to pick out an individual hero and see just their data separate to the rest.

The current deployed version can be found at https://github.com/ahsin59/office_dashboard_milestone2

UX
This dashboard is aimed at users who wish to analyse a large amount of data related to super-heroes and allow them to manipulate it in a way of their choosing and finally, be able to get to the specific data they require.

The journey from seeing the whole data set on screen to either being able to see a specific jobTitle, or analyse the data filtered in a way of the users choosing should be straight-forward and intuitive for the user to findout the different jobTitles with genders .

User Stories
As a user, I want to be able to view data on a number of jobTitle in different gender, without the need for swapping between multiple tabs and data sources.
As a user, I want to be able to view data on an individual super-hero and see information such as gender, gender balance, Average Bonus, Jobtitle distribution, and so on.
As a user, I want to be able to see which jobTitle are the most highly paid amongst the jobTitles as a whole.
As a user, I want to be able to compare the data at various levels of detail, and to look for connections between the different Jobtitle distribution - for example, does gender have show the perfEval per person per age with per person bomus.
As a user, I want to be able to draw my own conclusions from the data, for example, IT with bonus per person are more likely to have earn more bonus other then Data Scientist.
As a user, I want to be able to easily reset the data and start over, and not have to worry about manually setting all the values back to their original values.
Wireframes
The first 2 wireframes (mobile & desktop) were created at the beginning of the project. Whilst they are similar to the final product, they do differ in that the final site displays more data visualization elements than the original wireframes showed.

The final wireframe was put together part way through the project when I could better visualise what I wanted and is a lot closer to the final result.

  

Features
Current Features
Feature 1 - Top title bar with Reset Filters button
The top bar contains the name of the site and also a button that when clicked, resets all the filters back to their default values.
The bar is fixed to the top of the page so even when the user scrolls down, the user can quickly and easily reset the filters at any point. This avoids the need for constant scrolling up and down the page.
Feature 2 - Footer
A simple footer with a link to the original dataset on kaggle. Also contains a copyright notice and a link to my GitHub page.
Feature 3 - Introduction
This section contains a very brief introduction to what the site offers the user, alongside some basic instructions. This is kept intentionally brief to allow the UI to guide the user.
Feature 4 - Dropdown Filters
The 'filter by jobTitle' dropdown does just that, it allows the user to see all the jpbTitles in the list, dependent upon applied filters. It also allows the user to select a specific hero to view in average Bonus per gender.
The 'filter data by gender' dropdown is also self-explanatory and gives the user the option to apply this filter early in the process.
Feature 5 - Pie Charts
There are 3 pie charts, all displaying different data, they are - show per perfEval, show per person ahe, and show per person bonus. As instructed in the introduction, the user can click on the individual pie slices to filter the data how they choose.
To avoid clutter and improve readability, the pie charts only shows the most common entries for perfEval and bonus per gender. The ones that are not shown are grouped into their own section at the end, called others.
Feature 6 - Line Charts
There is 1 line chart, comprised of 6 different sources, each one relating to an attribute of the super-heroes. They are - Intelligence, Strength, Speed, Durability, Power, and Combat. This chart allows the user to see the spread of these attributes across the dataset. The user can hover over the data-point to see the exact values and can also hover over the legend to view just that attribute in isolation.
Feature 7 - Bar Charts
As with t    The barChart comprised with Gender balance,Average Bonus and jobTitle Distribution.
Rearrangeable sections
As it stands, you can close all sections down to just display its header, but I would like to take this one step further and have it so you can manually rearrange the individual sections in any order you choose, anywhere on the page. This would make it even easier to directly compare the data.
Separate section to display an individual jobTitles
Currently, to view an individual jobTitles, the user only needs to select that jobTitle from the drop down, then all elements will change to display just that jobTitles .
Technologies Used
The following technologies were used in the design and build of this project.

Wireframes 
Wireframes was used for creating the wireframes during the design stage.
HTML5 & CSS3
HTML5 & CSS3 were used to create the layout and styling of this site
Code validators were used to check for errors with the HTML and CSS 
AWS Cloud9
Cloud9 IDE editor used to write the HTML, CSS and JavaScript.
Bootswatch
Bootswatch 3.4.1 (Spacelab theme for bootstrap 3) was used to assist in the creation of the responsive grid structure for the site and also to provide some basic CSS styling.
JavaScript
JavaScript and selected external libraries have been used throughout this site, in the following ways:
For the creation and manipulation of the data-visualization elements, JavaScript and the following libraries were used
D3.js
DC.js
Crossfilter.js
D3-queue.js was used to load the dataset fully before running any other files.
jQuery was used to assist with DOM manipulation when resetting filters and showing / hiding selected sections.
JSHint was used to check for errors and code quality.
Backgroung image
Background image i get from google .
Tiny JPG
Tiny JPG was used to reduce the size of all .jpg's (and .png's) to assist with page loading times. This was mainly to reduce the file size of the background image.
Font Awesome
Font Awesome was used to provide the icons for the GitHub logo in the site footer, the gender icons used in the gender section, and the caret icon used to show/hide individual sections.
Git & GitHub
Git used for version control. GitHub used as a remote repository and the hosting of this site.
Testing
The site has been thoroughly tested in many ways. The JavaScript and its associated functions have all undergone extensive manual testing. A write up of this, along with the results, can be found here.

The responsiveness and correct displaying of all elements has been tested on a number of devices, browsers, and resolutions. Chrome, Firefox, Opera, Safari, Edge, and IE all display without issue.

There was one issue with IE which was fixed and is discussed in the JS testing section.

There was an issue with the opera browser that caused the last element on each row of 2 or more elements to be pushed down on to an additional row. After doing some research I could see this was not uncommon in opera  and the fix I settled on was to target all bootstrap 'col-' classes and apply a negative left and right margin of -.3px.

Chrome dev tools were used to simulate multiple devices and widths, and no issues were encountered.

The following physical devices tested with no issues found.

Windows desktop at HD, QHD, and UWQHD resolutions
Google Pixel 2XL
Apple iPhone 8S
Apple iPad mini
The site has been tested against all user stories listed in the UX section above. I was able to do everything the user would want to be able to do. I was able to compare the data easily by minimizing certain sections, I could filter the specific data I needed to, I could reset all the filters if I needed to. I was able to analyse the data and draw my own conclusions as well as verify observations on the data made by others.

Known Issues
There has been only 1 issue I could not fix, and instead have had to implement a workaround. The line chart has a horizontal legend which uses .horizontal(true) with dc.legend to change it from the default vertical legend. When .autoItemWidth is chained to it and set to true, it causes a display bug whereby the legend entries are bunched up together and overlapping, rendering it unreadable. This isn't immediately noticeable as it only happens if the line chart is hidden using the jQuery toggle, a filter is set, and then it is toggled back to be shown. It is easily fixed by reloading the page, but to avoid the user having to do this I have set .autoItemWidth to false and instead used .itemWidth with a value. Unfortunately, this doesn't display as well due to each word being a different number of characters, therefore the spacing appears uneven, but it does prevent this bug from occurring.

Deployment
The site was developed using the cloud9 IDE and uses git for version control which is then pushed to GitHub. The site is hosted on GitHub Pages and deployed there from the master branch on GitHub. There is no difference between the development version of this site, and the final version hosted on GitHub Pages.

To deploy this project, I took the following initial steps:

From my GitHub page I clicked on 'Repositories' and selected the required repository, in this case 'office -dashboard'
I then clicked on the 'settings' option, located on the top horizontal menu bar
Next, I scrolled down the page to the GitHub Pages section and located the dropdown box under 'Source'
From there I selected the 'master branch'
GitHub takes you back to the top of the page to allow you to rename the repository if desired. I kept it the same.
These steps resulted in the finished site being deployed at https://github.com/ahsin59/office_dashboard_milestone2
Every subsequent push to GitHub on the master branch updates the deployed site to match.

Credits
Content
All text was written by myself. The site was designed and built in full by myself.
The source dataset was obtained from Goggle Gove.uk can be found here.
Note - The original .csv file contained additional columns of data which have been removed from the dataset used for this project. This was for a number of reasons, usually due to that particular attribute not being used thus allowing a reduction in file size, or where some attributes were missing so much data it rendered it pointless. However, no heroes have been removed, all 700+ are still present and furthermore, where some heroes have attributes with missing data, these have been kept intentionally blank. Rather than filling them with placeholder data I decided to preserve the accuracy of the original dataset. For more information on how this affects the data as a whole, refer to the JS testing document here.
The kaggle dataset was originally scraped from the SHDB in June 2017.
Media
The original unmodified background image was sourced from google image search. It has since been modified and is being used in a non-profit educational capacity.
The favicon used was generated using this Font Awesome Favicon Generator.
Acknowledgements
Chris Zielinski, my Code Institute mentor, for her invaluable advice and guidance.
The slack channel community over at Code Institute, and specifically thanks to 'jowings', 'Eventyret', and 'Niel_ci' for their helpful feedback.
The dc.js documentation, or more specifically, the folks who wrote it, for making such a well-structured and easy to follow set of docs.
