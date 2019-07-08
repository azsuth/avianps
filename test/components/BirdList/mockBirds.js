import Bird from 'app/model/bird';

const birds = [
  {
    id: 'cjxm26gv000j80b426u4v7gfe',
    name: 'Weka',
    scientificName: 'Gallirallus australis',
    description:
      'The weka is one of New Zealand’s iconic large flightless birds. Likely derived from a flighted ancestor, weka are 3-6 times larger than banded rails, which are considered their nearest flying relatives. Weka are charismatic birds that are often attracted to human activity. This makes an encounter with a weka a wildlife highlight for many people, as the curious bird searches for any food item that the intruder might bring. But people who live alongside weka often have a less charitable opinion, as they have to live with ever-watchful weka snatching opportunities to raid vegetable gardens, pilfer poultry food and eggs, and even steal dog food from the bowl.',
    conservationStatus: 'Not Threatened',
    imageUrl:
      'http://nzbirdsonline.org.nz/sites/all/files/470312DSC_3190%20-%20Version%202%20-%202014-07-22%20at%2012-07-07.png',
    scores: [
      {
        id: 'cjxuhxie80vj70b99byqijvuk',
        rating: 3,
        comment:
          "this is a long comment, I really like this bird, although I don't really like it's name. the colors are pretty, but it's sound is annoying."
      },
      {
        id: 'cjxuhy2o21b4p0b40habj9elw',
        rating: 8,
        comment:
          "this is a long comment, I really like this bird, although I don't really like it's name. the colors are pretty, but it's sound is annoying."
      },
      {
        id: 'cjxuhyncl0vln0b99zwy89kx1',
        rating: 6,
        comment:
          "this is a long comment, I really like this bird, although I don't really like it's name. the colors are pretty, but it's sound is annoying."
      },
      {
        id: 'cjxuiansd0we90b99tkg6kz5r',
        rating: 9,
        comment: "createScoreService('a_bird_id', 8, 'comment', { request });"
      },
      {
        id: 'cjxuiptgc1dsq0b40k4all9we',
        rating: 4,
        comment: 'asgasdgasdfasdf'
      },
      {
        id: 'cjxuk2s96121q0b99wsof1rjr',
        rating: 6,
        comment: 'sdfhshdf'
      },
      { id: 'cjxumu55t1abq0b996sf5l4dv', rating: 9, comment: '' },
      { id: 'cjxumuggf1afq0b99xripf6hd', rating: 2, comment: '' }
    ]
  },
  {
    id: 'cjxm26gus00j40b424oz6yhql',
    name: 'Pukeko',
    scientificName: 'Porphyrio melanotus',
    description:
      'The pukeko is a widespread and easily recognisable bird that has benefitted greatly by the clearing of land for agriculture. In addition to its brilliant red frontal shield and deep violet breast plumage, the pukeko is interesting for having a complex social life. In many areas, pukeko live in permanent social groups and defend a shared territory that is used for both feeding and breeding. Social groups can have multiple breeding males and females, but all eggs are laid in a single nest and the group offspring are raised by all group members.',
    conservationStatus: 'Not Threatened',
    imageUrl: 'http://nzbirdsonline.org.nz/sites/all/files/470329IMGP3625.JPG',
    scores: [
      {
        id: 'cjxn8zpwc14y50b125cynmkha',
        rating: 8,
        comment: 'This is a comment'
      },
      {
        id: 'cjxn9saln1a5n0b12vvpeo2vh',
        rating: 9,
        comment: 'This is another comment'
      },
      {
        id: 'cjxuie8xn0wm00b99qqplltac',
        rating: 6,
        comment: 'The last comment.'
      },
      {
        id: 'cjxuiecz40wmc0b990um07165',
        rating: 6,
        comment: 'The last comment.'
      },
      {
        id: 'cjxuil1l70wzc0b995tdbg7m8',
        rating: 3,
        comment:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
      },
      {
        id: 'cjxuiou3e1don0b409rehfsly',
        rating: 3,
        comment: 'asdklaj;sghjkl;asdhgl;aksjdfnkl;asdjbf'
      },
      {
        id: 'cjxuismta1e5n0b40ucaki7qk',
        rating: 10,
        comment: 'hdsfghdgfjghfgfhjgfhjfghjgfh'
      },
      {
        id: 'cjxujff610zvh0b9951ke1ze0',
        rating: 6,
        comment: 'agasdgasdg'
      },
      {
        id: 'cjxuji9uw103c0b99m7ksiiap',
        rating: 4,
        comment: 'asdfasdfasdfasdf'
      },
      {
        id: 'cjxujl2kb1hnp0b40gv92nhwo',
        rating: 2,
        comment: 'asdfasdgasdgasd'
      },
      {
        id: 'cjxujw39e11h10b9977uv6jyb',
        rating: 10,
        comment: 'asdfasdg'
      }
    ]
  },
  {
    id: 'cjxm26gv800jc0b420orvjphk',
    name: 'Southern Brown Kiwi',
    scientificName: 'Apteryx australis',
    description:
      'The Stewart Island tokoeka is the largest of the kiwi. Fiordland tokoeka are also very large, but Haast birds are smaller. Widespread in forest, scrub, tussock grasslands and subalpine zones of the south-western South Island and on Stewart Island. Flightless, with tiny vestigial wings and no tail. Generally nocturnal, therefore more often heard than seen, except on Stewart Island where birds often forage during the day. Male gives a repeated high-pitched ascending whistle, female gives a deeper throaty cry. A range of colours from rufous brown in Haast, to brown and dark brown elsewhere, streaked lengthways with reddish brown and black. Feather tips feel soft. Long pale bill, short legs and toes.',
    conservationStatus: 'Nationally Endangered',
    imageUrl:
      'http://nzbirdsonline.org.nz/sites/all/files/47049IMG_5828%20-%20Copy%20-%20Copy%20finished%20red%20nzbirdsonline%201.jpg',
    scores: [
      { id: 'cjxuk3iy41k3b0b40ld95cjb3', rating: 10, comment: 'top' },
      {
        id: 'cjxuk4jo2126j0b995ergusgl',
        rating: 9,
        comment: 'the bees knees'
      }
    ]
  },
  {
    id: 'cjxm26gvd00jg0b420m9jmz11',
    name: 'Little Penguin',
    scientificName: 'Eudyptula minor',
    description:
      'As their name suggests, the little penguin is the smallest species of penguin. They are also the most common penguin found around all coasts of New Zealand’s mainland and many of the surrounding islands. Primarily nocturnal on land, they are sometimes found close to human settlements and often nest under and around coastal buildings, keeping the owners awake at night with their noisy vocal displays. They live up to their scientific name ‘Eudyptula’ meaning “good little diver”, as they are excellent pursuit hunters in shallow waters.',
    conservationStatus: 'Declining',
    imageUrl:
      'http://nzbirdsonline.org.nz/sites/all/files/470121Birds%20online%20CD2%20022.jpg',
    scores: [
      {
        id: 'cjxuicmw90wil0b99pyoyp9cu',
        rating: 6,
        comment:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
      },
      {
        id: 'cjxuidhdw0wki0b99t7efx0ic',
        rating: 10,
        comment:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
      }
    ]
  },
  {
    id: 'cjxm26gvj00jk0b42kxlrlku4',
    name: 'Pied Shag',
    scientificName: 'Phalacrocorax varius',
    description:
      'This large black-and-white shag is often seen individually or in small groups roosting on rocky headlands, trees or artificial structures. In regions where it occurs, it can usually be readily seen about harbours and estuaries associated with cities or towns. Unlike most other shag species, the pied shag is reasonably confiding, allowing close approach when roosting or nesting in trees. It generally forages alone, but occasionally in small groups when prey is abundant.',
    conservationStatus: 'Recovering',
    imageUrl:
      'http://nzbirdsonline.org.nz/sites/all/files/470249DSC_0018_6.JPG',
    scores: [
      { id: 'cjxujyo6z11p90b992bq0zlps', rating: 9, comment: 'rating' },
      {
        id: 'cjxuk5cah128i0b99gq1ete4i',
        rating: 0,
        comment: 'terrible'
      }
    ]
  },
  {
    id: 'cjxm26gvp00jo0b420c294ujq',
    name: 'Tui',
    scientificName: 'Prosthemadera novaeseelandiae',
    description:
      'Tui are boisterous, medium-sized, common and widespread bird of forest and suburbia – unless you live in Canterbury. They look black from a distance, but in good light tui have a blue, green and bronze iridescent sheen, and distinctive white throat tufts (poi). They are usually very vocal, with a complicated mix of tuneful notes interspersed with coughs, grunts and wheezes. In flight, their bodies slant with the head higher than the tail, and their noisy whirring flight is interspersed with short glides.',
    conservationStatus: 'Not Threatened',
    imageUrl: 'http://nzbirdsonline.org.nz/sites/all/files/470543Tui1.jpg',
    scores: []
  },
  {
    id: 'cjxm26gvu00js0b421qx17ag9',
    name: 'Fantail',
    scientificName: 'Rhipidura fuliginosa',
    description:
      'The fantail is one of New Zealand’s best known birds, with its distinctive fanned tail and loud song, and particularly because it often approaches within a metre or two of people. Its wide distribution and habitat preferences, including frequenting well-treed urban parks and gardens, means that most people encounter fantails occasionally. They can be quite confiding, continuing to nest build or visit their nestlings with food when people watch quietly. There are two colour forms or ‘morphs’ of fantail, with the more common pied morph occurring throughout its range, and the black morph comprising up to 5% of the South Island population, and occasionally occurring in the North Island.',
    conservationStatus: 'Not Threatened',
    imageUrl: 'http://nzbirdsonline.org.nz/sites/all/files/470555IMG_0690.JPG',
    scores: [
      {
        id: 'cjxuqe67i1j6y0b99ijyj6tk4',
        rating: 7,
        comment: 'first review!'
      }
    ]
  }
];

export default birds.map(rawBird => new Bird(rawBird));
