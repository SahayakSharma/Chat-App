# Chat-App

This is a web chat application made using `react js` for front-end and `node js` for processing data in the backend. The application requires basic login credentials including first name and second name and an avatar for your porfile.
 
The web application uses `socket.io` library for secure connection between two or more clients. Using the library, message receiving and sending events are emitted and received onto different clients pages. 
# Architecture Used

The code follows `monorepo` architecture using lerna 
# How it Appears

Initially a login page is displayed which appears as below : 

![image](https://github.com/SahayakSharma/Chat-App/assets/115233111/b7937ae8-dc6a-47a3-9744-8de21b3caf56)



Here, you need to fill the given details includeing _first name_ , _second name_, _avatar_ to login successfully. After successfull login, the user is directed to the chatting screen where his/her name and _avatar_ is displayed and the chats received and sent are displayed including the _time_ at which they are sent or received.

![image](https://github.com/SahayakSharma/Chat-App/assets/115233111/350a98cb-6416-43fa-933b-e573cfac611d)



# Tech Stack used : 
>React JS - ( Front End )

>Socket.io - ( client-server communication )

>Node JS - ( Back End )

>Express JS - ( Back End )

>Tailwind CSS - ( Styling )


# How to Run

**Step 1** : Clone the repository using the below git command in the terminal of your code editor.
>`git clone https://github.com/SahayakSharma/Chat-App.git`

**Step 2** : Install the node module folder using npm command given below
>`npm i`

**Step 3** : Now run the server using the given npm command
>`npm start`


# Contributing

Thank you for considering contributing to our project! Whether you're fixing a bug, implementing a new feature, or improving documentation, your contributions are highly appreciated.

### How to Contribute

1. **Fork the repository** to your GitHub account.
2. **Clone the repository** to your local machine:

```bash
   git clone https://github.com/your-username/your-project.git
```

### To change branch 
```bash
   git checkout <branch-name>
```

### To make a new branch and switch to it
```bash
   git checkout -b <branch-name>
```

### Steps to push your changes



 > `git add .`


  >`git commit -m "your-message"`


  >`git push origin <branch-name>`

Create a pull request after you are done with the changes.
 


