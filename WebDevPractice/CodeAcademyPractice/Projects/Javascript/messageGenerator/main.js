messages = [
    "Therefore, if anyone is in Christ, he is a new creation. The old has passed away; behold, the new has come. All this is from God, who through Christ reconciled us to himself and gave us the ministry of reconciliation; that is, in Christ God was reconciling the world to himself, not counting their trespasses against them, and entrusting to us the message of reconciliation. Therefore, we are ambassadors for Christ, God making his appeal through us. We implore you on behalf of Christ, be reconciled to God. For our sake he made him to be sin who knew no sin, so that in him we might become the righteousness of God."
    ,
    "For God so loved the world, that he gave his only Son, that whoever believes in him should not perish but have eternal life. For God did not send his Son into the world to condemn the world, but in order that the world might be saved through him. Whoever believes in him is not condemned, but whoever does not believe is condemned already, because he has not believed in the name of the only Son of God."
    ,
    "Jesus said to him, “I am the way, and the truth, and the life. No one comes to the Father except through me. If you had known me, you would have known my Father also. From now on you do know him and have seen him.”"
    ,
    "And this is eternal life, that they know you, the only true God, and Jesus Christ whom you have sent."
    ,
    "And Jesus came and said to them, “All authority in heaven and on earth has been given to me. Go therefore and make disciples of all nations, baptizing them in the name of the Father and of the Son and of the Holy Spirit, teaching them to observe all that I have commanded you. And behold, I am with you always, to the end of the age.”"
]

const messageGenerator = (array) => {
    return array[Math.floor(Math.random()*array.length)]
}

console.log(messageGenerator(messages))