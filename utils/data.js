const names = [
    'Pinky',
    'Boogerbrain',
    'Slugspitz',
    'Dingbug',
    'Beeman',
    'Zoozy',
    'Beaniehall',
    'Slugeenie',
    'Sockhall',
    'Zoowee',
    'Snotbrain',
    'Hickster',
    'Oinkhall',
    'Goatton',
    'Noseball',
    'Hippybag',
    'Snorbo',
    'Sockfish',
    'Roachfeet',
    'Gooberry ',
    'Merobeeba',
    'Jefferson',
    'KittyCat',
    'Potato',
    'Beans',
    'Beezy',
    'Snakes',
    'Figgy',
    'Wallbanger',
    'Kingfisher',
    'Wizard',
    'Jimbo',
    'McSnortleton',
    'Picklepants',
    'Chuckleberry',
    'Noodleface',
    'Tiddlywink',
    'McGiggles',
    'Bumblesnort',
    'Snickerdoodle',
];

const thoughts = [
'Chill vibes only.',
'Nothing really mattress except sleep.',
'Not to brag, but I used hand soap before it was trending.',
'Birthdays are incomplete without the ones who love and care for you.',
'The best of me is yet to come.',
'Weekend getaway',
'I get way too much happiness from good food.',
'Bad to the bone.',
'Sometimes all the soul needs is a walk in nature',
'That’s a wrap! No, seriously – I finally finished wrapping the gifts.',
'The best revenge is a massive success.',
'We’ve got chemis-tree.',
'“We are all a mess, but it’s how we keep it together that makes us beautiful.” – J. Iron Word ',
'A problem is a chance for you to do your best.',
'Inner beauty needs no makeup.',
'By getting lost in nature, you get closer to finding yourself',
'Thanks to everyone who took the time to wish me a Happy Birthday!',
'Call of the wild!',
'When I’m with you, time stands still.',
'Happy birthday to the best',
'Pause and reset.',
'Money can’t buy happiness. But it can buy Makeup!',
'But first, let me take a selfie',
'You can never quit. Winners never quit, and quitters never win.',
'No matter what’s going on in the world, always remember to spread good vibes.',
'I don’t think inside the box and I don’t think outside the box… I don’t even know where the box is. ',
'Freedom feels a lot like the summer breeze',
'In a world full of trends, I want to remain a classic.',
'It sure is strange that after Tuesday the rest of the week spells WTF.',
'Happy birthday, can’t wait to celebrate this one and many more!',
'You CAN sit with us.',
];

const getRandomItem = (arr) => arr[Math.floor(Math.random() * arr.length)];

const usersUnite = () => 
    `${getRandomItem(names)} ${getRandomItem(names)}`;

const gatherThoughts= (int) => {
    const results = [];
    for (let i = 0; i < int; i++) {
        results.push({
            thoughtText: getRandomItem(thoughts),
        });
    }
    return results;
}

module.exports= { usersUnite, gatherThoughts};