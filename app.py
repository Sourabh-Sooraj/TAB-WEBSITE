from flask import Flask, render_template, request, url_for, redirect, session
import smtplib
from email.message import EmailMessage


app = Flask(__name__)
app.secret_key = "testing"


def email_alert(subject, body, to):
    msg= EmailMessage()
    msg.set_content(body)
    msg['subject'] = subject
    msg['to'] = to
    user = "kandati550@gmail.com"
    password="sfvrjzamrztyrxqg "
    msg['from'] = user
    server = smtplib.SMTP("smtp.gmail.com",587)
    server.starttls()
    server.login(user, password)
    server.send_message(msg)
    server.quit()


@app.route('/')
def index():

        return render_template('Contactus.html')

@app.route("/action",methods=["POST"])
def action():
        name = request.form.get("name")
        phoneno = request.form.get("phoneno")
        Email = request.form.get("Email")
        Message = request.form.get("Message")
        body= "name:"+str(name) + "phone no:"+str(phoneno) + "Email:"+str(Email) + "message:"+str(Message)
        EMAIL="sujithkandati2001@gmail.com"
        email_alert("New Response! - TAB Website Form", body, EMAIL)
        return render_template('successful.html')



if __name__ == "__main__":
  app.run(debug=True)