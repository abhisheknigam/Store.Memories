# Store.Memories
https://devpost.com/software/store-memories
# Caltech Hackathon - HackTech Project

![Alt text](https://challengepost-s3-challengepost.netdna-ssl.com/photos/production/software_photos/000/486/018/datas/gallery.jpg)
![Alt text](https://challengepost-s3-challengepost.netdna-ssl.com/photos/production/software_photos/000/486/019/datas/gallery.jpg)
![Alt text](https://challengepost-s3-challengepost.netdna-ssl.com/photos/production/software_photos/000/486/020/datas/gallery.jpg)
![Alt text](https://challengepost-s3-challengepost.netdna-ssl.com/photos/production/software_photos/000/486/021/datas/gallery.jpg)
![Alt text](https://challengepost-s3-challengepost.netdna-ssl.com/photos/production/software_photos/000/486/169/datas/gallery.jpg)
![Alt text](https://challengepost-s3-challengepost.netdna-ssl.com/photos/production/software_photos/000/486/170/datas/gallery.jpg)
![Alt text](https://challengepost-s3-challengepost.netdna-ssl.com/photos/production/software_photos/000/486/172/datas/gallery.jpg)

# Inspiration
My, and the grandparents of two of my teammates suffer from Alzheimer's, and it is difficult to watch them slowly forget you. Every year, hundreds of thousands of people suffer from the same disease. Our inspiration to make this app was to make life a little better for them and their loved ones

# What it does
The app works as a personal assistant to the patient. It provides daily reminders to the patient about their life, who their family is, where they live etc. It sends them a notification when someone with the secondary app comes in Bluetooth range of their iBeacon.

It scans the user's gallery for images of their loved ones, and tags them with their details, which the user can then pull and see. This helps to remind the user of who the people around them are.

The main functionality of the app is the Natural Language AI. The user can ask questions about themselves, their families, their friends, and get an instant response.

# How I built it
We built the front-end of the app using Ionic, server was handled by node.js. We used Microsoft's Natural Language Processing API to understand and respond to the user's questions in a natural human language. We then used Microsoft's computer vision API to scan and group together images from the gallery, and finally we used a proximity sensor to notify the user if someone known comes close to them.

# Challenges I ran into
We initially found it difficult to understand the Computer vision API and spent a significant amount of time trying to get it to work. Much of the code we wrote in the testing phase had to be rewritten to be iOS compatible. It was our first time working with a combination of computer vision and natura language processing, stitching together the two functions took us a lot of time.

# Accomplishments that I'm proud of
We were successfully able to create a personal assistant which is intelligent enough to understand a non-technical person's speech. We were able to automate the video creation and captioning system using OpenCV, and the computer vision and facial recognition APIs from Microsoft

# What I learned
We learned how to use two new APIs, and will be more comfortable with using them in the future. We integrated a hardware element to our project to enhance its functionality, and learned how to manage time better to be able to finish the project.

# What's next for Store.Memories
We'd like to clean up the UI, add a camera tab to facially recognize someone's face by comparing photos from the user's Facebook/other social media. If we're able to get many users, we would like to use information like their locations, when and how many times they use a particular function in the app to track the progression of the disease. This information could prove invaluable to medical researchers.
