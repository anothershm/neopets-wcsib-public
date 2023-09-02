# What Capsule Should I Buy?
Ever thought about making an investment in some capsules but were indecisive on which to buy? This project tries to tackle that.  
It uses *selenium* to get the capsules and the current buyables from NC mall.   
Then it uses *jellyneo* to get the items contained inside the capsules. It makes a call to *Dress To Impress* to check the seeking/offering for each item.   
It uses *itemDB* to extract the images and the owls value.   


## Jobs
* nc-mall-script.py extracts all the capsules and buyables in nc mall currently and puts them in capsules_in_nc_mall.txt. Runs twice a month  
* extract-info-capsules.py extracts the information needed for each capsule. If it's a new capsule it creates, if it is still collecting the items it updates them otherwise updates the numbers of seeking/offering. Runs weekly

## APP
App made in react 18 to display the information extracted. Uses:
* [Material React Table](https://www.material-react-table.com/) for the tables.

To run it locally first install the dependencies doing `npm install` inside /app and then do a `run npm start`
