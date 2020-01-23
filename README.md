# Clark Street Questions
A simple web-based question generator for you and your friends: https://schwadan001.github.io/clarkstreet/

## How to contribute questions:

1. Familiarize yourself with the categories and questions, which are managed in published Google Sheets:
    * [View Categories](https://docs.google.com/spreadsheets/d/e/2PACX-1vQeyuO244no4aeI5yYGCIESoqAwCps-PifvaK-rha0_9QlMfTLtw7rSsvRZm2Ja_9KStnifFK8QoPqb/pubhtml)
    * [View Questions](https://docs.google.com/spreadsheets/d/e/2PACX-1vS3__N0kBG7rfASDY1FJTVgxPg7cq3TI6qAbKi9ARjKtUrLrKo3U_wxfLf0ukCVto7EVXiKXlItUpOk/pubhtml)
1. Obtain access to modify these Google Sheets documents.
1. Make changes to the sheets and request for the repository to be updated (or see below).

## How to update the repo with Google Sheets data:

### Setup
1. Download the following software:
    * Git - https://git-scm.com/downloads
    * GitHub Desktop - https://desktop.github.com/
    * Python (3.x) - https://www.python.org/downloads/
1. Make sure pip, the Python package installer, is accessible from your command terminal by running ```pip -V``` (you may have to restart your computer)
    * Run ```pip install requests``` to install the Python web requests package.
1. Fork this repository in GitHub.
1. Sign into GitHub Desktop and clone the forked repository onto your computer.

### Loading changes into the repository
1. Make sure your Google Sheet changes are reflected in their published pages ([categories](https://docs.google.com/spreadsheets/d/e/2PACX-1vQeyuO244no4aeI5yYGCIESoqAwCps-PifvaK-rha0_9QlMfTLtw7rSsvRZm2Ja_9KStnifFK8QoPqb/pubhtml) and [questions](https://docs.google.com/spreadsheets/d/e/2PACX-1vS3__N0kBG7rfASDY1FJTVgxPg7cq3TI6qAbKi9ARjKtUrLrKo3U_wxfLf0ukCVto7EVXiKXlItUpOk/pubhtml)). The publications only update every 5 minutes, so you may have to wait a bit.
1. Use git to ensure your branch is up-to-date with schwadan001/master.
1. Navigate to the folder where you cloned the repository and run the ```load_json.py``` script. This will pull your changes from Google Sheets and load them into the ```resources``` folder.
1. Commit and push your local changes to GitHub.
1. Create a pull request to the schwadan001/master branch.
