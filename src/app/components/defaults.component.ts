import { IZoomList, IZoom, IExplorerLink, IHistoryItem2, IZoomSettings, ILiveStatWorker, IFetchResponce, ILocalTimeDelta, ILiveStatCommon } from 'interfaces/common';

export class DefaultParams {
    static readonly GUIVERSION = 'v1.28b';
    static readonly GUISOURCE = 'https://github.com/';

    static readonly COREVERSION = 'v3.12b';
    static readonly CORESOURCE = 'https://github.com/';

    static readonly SUPPORTMAIL = '';
    static readonly DISCORDSERVER = '';

    static readonly ADMINNAME: string = 'admin';
    static readonly GAZERNAME: string = 'observer';
    static readonly BASECOINSWITCHTIMER: number = 300;
    static readonly BLOCKSFETCHTIMER: number = 120;
    static readonly DATAUPDATETIMER: number = 29;
    static readonly LIVESTATCACHE: number = 15;
    static readonly HISTORYSTATCACHE: number = 50;
    static readonly MAXHISTORYITEMS: number = 500;
    static readonly MULTIPLYHISTORYDATAFORCHART: number = 3;
    static readonly FETCHRESPONCE: IFetchResponce = { status: false, coin: '', type: '' };
    static readonly DEFAULTTYPE = 'pool';
    static readonly DNSNAME = 'zulupool.com';
    static readonly BTCWIKI = 'https://en.bitcoin.it/wiki/Difficulty#What_is_the_minimum_difficulty.3F';
    static readonly PPDA = 'https://ppda.';
    static readonly PPDALN = 'https://beta.';
    static readonly PPDAALGO = 'sha256d';
    static readonly STRATUM = 'sha256.';
    static readonly FASTJOBCOINS = ['DGB.sha256'];
    static readonly DEFCOINS = ['BTC', 'BCHN', 'BCHABC', 'BSV', 'DGB', 'FCH', 'HTR'];
    static readonly PPDALNREWARD = '91.12%';
    static readonly RECOMMENDEDHTR = '1600';
    static readonly ADDREXAMPLES = {
        BTC: [' P2PKH:13xDZX65TFmeFgowMJsJvutmSxUttwkE3f', ' PS2H:3H28N5WuREZ93CNmhWcRcrnykWrMqkhFyWN', ' Bech32:bc1uf5tdn87k2uz7r2kl5zrfww362ch3746lq5vse7'],
        BCHN: [' P2PKH:13xDZX65TFmeFgowMJsJvutmSxUttwkE3f'],
        BCHABC: [' P2PKH:13xDZX65TFmeFgowMJsJvutmSxUttwkE3f'],
        BSV: [' P2PKH:13xDZX65TFmeFgowMJsJvutmSxUttwkE3f'],
        DGB: [' P2PKH:DSMvc9BbM8vtrjPSpMaXmQVXWZsgA92Wxc', ' PS2H:SRsJzf5XL19LDff1paPzRB6p6Va6NmW8Pc', ' Bech32:dgb1q5d0dypakqz326jhuqzsspdkys0dxs5ztckrtl9'],
        FCH: [' P2PKH:FV4WF4rRUvqD3ekQudccGGCFHqTTHnpMhu'],
        HTR: [' P2PKH:HTjxTEAUSwZf34nK4YuicfDPocT7JsQwJi'],
    };

    static readonly TARGETLOGINIGNORE = [
        '/userChangePassword',
        '/userChangePasswordInitiate',
        '/userCreate',
        '/userResendEmail',
        '/userAction',
        '/userLogin',
        '/userLogout',
        '/userEnumerateAll',
        '/backendQueryCoins',
        '/backendQueryFoundBlocks',
        '/backendQueryPoolStats',
        '/backendQueryPoolStatsHistory',
        '/backendQueryProfitSwitchCoeff',
        '/backendUpdateProfitSwitchCoeff',
        '/instanceEnumerateAll',
    ];
    static readonly SESSIONIDIGNORE = [
        '/userChangePasswordInitiate',
        '/userResendEmail',
        '/userLogin',
        '/backendQueryCoins',
        '/backendQueryFoundBlocks',
        '/backendQueryPoolStats',
        '/backendQueryPoolStatsHistory',
        '/instanceEnumerateAll',
    ];
    static readonly REQTYPE = {
        POOL: 'pool',
        USER: 'user',
        WORKER: 'worker',
    };
    static readonly LOCALTIMEDELTA: ILocalTimeDelta = {
        delta: 0,
        isUpdated: false,
    };
    static readonly NULLSTATHISTORYITEM: IHistoryItem2 = {
        name: '',
        time: 0,
        shareRate: 0,
        shareWork: 0,
        power: 0,
    };
    static readonly NULLSTATLIVEITEM: ILiveStatWorker = {
        lastShareTime: 0,
        name: '',
        power: 0,
        shareRate: 0,
        shareWork: 0,
    };
    static readonly NULLSTATUSERLIVEITEM: ILiveStatCommon = {
        lastShareTime: 0,
        power: 0,
        shareRate: 0,
        shareWork: 0,
        miners: [],
        workers: 0,
    };
    static readonly BLOCKSLINKS: IExplorerLink = {
        //        BTC: 'https://btc.com/',
        BTC: 'https://chainz.cryptoid.info/btc/block.dws?',
        BCH: 'https://bch.btc.com/',
        BCHN: 'https://bch.btc.com/',
        BCHA: 'https://explorer.bitcoinabc.org/block/',
        BSV: 'https://whatsonchain.com/block/',
        DGB: 'https://chainz.cryptoid.info/dgb/block.dws?',
        FCH: 'http://fch.world/block/',
        HTR: 'https://explorer.hathor.network/transaction/',
    };
    static readonly TXLINKS: IExplorerLink = {
        //BTC: 'https://btc.com/',
        BTC: 'https://chainz.cryptoid.info/btc/tx.dws?',
        BCH: 'https://bch.btc.com/',
        BCHN: 'https://bch.btc.com/',
        BCHABC: 'https://explorer.bitcoinabc.org/tx/',
        BSV: 'https://whatsonchain.com/tx/',
        DGB: 'https://chainz.cryptoid.info/dgb/tx.dws?',
        FCH: 'http://fch.world/tx/',
        HTR: 'https://explorer.hathor.network/transaction/',
    };
    static readonly ADDRLINKS: IExplorerLink = {
        //BTC: 'https://btc.com/',
        BTC: 'https://chainz.cryptoid.info/btc/address.dws?',
        BCH: 'https://bch.btc.com/',
        BCHN: 'https://bch.btc.com/',
        BCHABC: 'https://explorer.bitcoinabc.org/address/',
        BSV: 'https://whatsonchain.com/address/',
        DGB: 'https://chainz.cryptoid.info/dgb/address.dws?',
        FCH: 'http://fch.world/address/',
        HTR: 'https://explorer.hathor.network/address/',
    };

    //static readonly zoom: string = "15M";
    //static readonly zoomList: string[] = ["1M","5M","30M","H1","H4","D","W",];
    static readonly ZOOM: IZoom = {
        pool: 'H1',
        user: 'H1',
        worker: 'H1',
        history: 'D',
    };
    static readonly ZOOMSLIST: IZoomList = {
        pool: ['3M', '15M', '30M', 'H1', 'H4', 'D'],
        user: ['5M', '15M', 'H1', 'H4', 'D'],
        worker: ['5M', '15M', 'H1', 'H4', 'D'],
        history: ['D', 'W', 'M'],
    };
    static readonly ZOOMPARAMS: IZoomSettings = {
        '1M': {
            groupByInterval: 1 * 60,
            statsWindow: 50,
            maxStatsWindow: 60,
            refreshTimer: 20,
            labelText: 'HH:mm',
            lastLabelText: 'HH:mm:ss',
        },
        '2M': {
            groupByInterval: 2 * 60,
            statsWindow: 50,
            maxStatsWindow: 60,
            refreshTimer: 20,
            labelText: 'HH:mm',
            lastLabelText: 'HH:mm:ss',
        },
        '3M': {
            groupByInterval: 3 * 60,
            statsWindow: 50,
            maxStatsWindow: 60,
            refreshTimer: 20,
            labelText: 'HH:mm',
            lastLabelText: 'HH:mm:ss',
        },
        '5M': {
            groupByInterval: 5 * 60,
            statsWindow: 50,
            maxStatsWindow: 60,
            refreshTimer: 60,
            labelText: 'HH:mm',
            lastLabelText: 'HH:mm:ss',
        },
        '10M': {
            groupByInterval: 10 * 60,
            statsWindow: 50,
            maxStatsWindow: 60,
            refreshTimer: 60,
            labelText: 'HH:mm',
            lastLabelText: 'HH:mm:ss',
        },
        '15M': {
            groupByInterval: 15 * 60,
            statsWindow: 50,
            maxStatsWindow: 60,
            refreshTimer: 60,
            labelText: 'HH:mm',
            lastLabelText: 'HH:mm:ss',
        },
        '30M': {
            groupByInterval: 30 * 60,
            statsWindow: 50,
            maxStatsWindow: 60,
            refreshTimer: 60,
            labelText: 'HH:mm',
            lastLabelText: 'HH:mm:ss',
        },
        H1: {
            groupByInterval: 60 * 60,
            statsWindow: 50,
            maxStatsWindow: 60,
            refreshTimer: 60,
            labelText: 'dd HH:mm',
            lastLabelText: 'HH:mm:ss',
        },
        H4: {
            groupByInterval: 4 * 60 * 60,
            statsWindow: 50,
            maxStatsWindow: 60,
            refreshTimer: 60,
            labelText: 'dd HH:mm',
            lastLabelText: 'HH:mm:ss',
        },
        D: {
            groupByInterval: 24 * 60 * 60,
            statsWindow: 50,
            maxStatsWindow: 60,
            refreshTimer: 60,
            labelText: 'dd HH:mm',
            lastLabelText: 'HH:mm:ss',
        },
        W: {
            groupByInterval: 7 * 24 * 60 * 60,
            statsWindow: 50,
            maxStatsWindow: 60,
            refreshTimer: 60,
            labelText: 'dd HH:mm',
            lastLabelText: 'HH:mm:ss',
        },
    };

    static readonly ANIMALS = [
        'Albatross',
        'Ant',
        'Anteater',
        'Antelope',
        'Aphid',
        'Armadillo',
        'Badger',
        'Barbel',
        'Bat',
        'Bear',
        'Beaver',
        'Bee',
        'Beetle',
        'Biddy',
        'Blackbird',
        'Blindworm',
        'Boa',
        'Bullock',
        'Bumblebee',
        'Camel',
        'Canary',
        'Carp',
        'Caterpillar',
        'Chameleon',
        'Chimpanzee',
        'Cockroach',
        'Cod',
        'Copperhead',
        'Coral Snake',
        'Cottonmouth',
        'Crab',
        'Crocodile',
        'Crow',
        'Cuckoo',
        'Dachshund',
        'Dolphin',
        'Dove',
        'Dragonfly',
        'Duck',
        'Eagle',
        'Earthworm',
        'Eel',
        'Elephant',
        'Falcon',
        'Finch',
        'Flamingo',
        'Flea',
        'Fly',
        'Fox',
        'Frog',
        'Frogspawn',
        'Gadfly',
        'Gazelle',
        'Gecko',
        'Gerbil',
        'Giraffe',
        'Goat',
        'Goldfish',
        'Goose',
        'Grasshopper',
        'Guinea Pig',
        'Gull',
        'Haddock',
        'Halibut',
        'Hamster',
        'Hare',
        'Hare',
        'Harvestman',
        'Hawk',
        'Hedgehog',
        'Hog',
        'Horse',
        'Hyena',
        'Iguana',
        'Jackdaw',
        'Jay',
        'Jellyfish',
        'Kestrel',
        'Kookaburra',
        'Ladybug',
        'Larva',
        'Leech',
        'Lion',
        'Lizard',
        'Llama',
        'Lobster',
        'Lynx',
        'Maggot',
        'Mallard',
        'Mammoth',
        'Marmot',
        'Midge',
        'Millipede',
        'Mink',
        'Mole',
        'Mongoose',
        'Moth',
        'Mouse',
        'Mule',
        'Newt',
        'Nightingale',
        'Nuthatch',
        'Nymph',
        'Ostrich',
        'Otter',
        'Owl',
        'Panda',
        'Parakeet',
        'Parrot',
        'Peacock',
        'Pelican',
        'Penguin',
        'Perch',
        'Pheasant',
        'Pig',
        'Pigeon',
        'Pike',
        'Piranha',
        'Plaice',
        'Platypus',
        'Poisonous',
        'Polar Bear',
        'Polecat',
        'Pony',
        'Porcupine',
        'Prairie Dog',
        'Puma',
        'Python',
        'Racoon',
        'Rat',
        'Raven',
        'Ray',
        'Red Admiral',
        'Reindeer',
        'Rhinoceros',
        'Robin',
        'Rooster',
        'Roundworm',
        'Salamander',
        'Salmon',
        'Saurian',
        'Sawfish',
        'Scallop',
        'Scorpion',
        'Seal',
        'Seal',
        'Shark',
        'Sheep',
        'Shell',
        'Shrimp',
        'Sidewinder',
        'Silkworm',
        'Skunk',
        'Sloth',
        'Slug',
        'Snail',
        'Snake',
        'Sparrow',
        'Spider',
        'Squirrel',
        'Stork',
        'Swallow',
        'Swallowtail',
        'Swan',
        'Swift',
        'Tadpole',
        'Tapeworm',
        'Tarantula',
        'Tiger',
        'Tit',
        'Toad',
        'Tortoise',
        'Trout',
        'Turkey',
        'Turtle',
        'Vulture',
        'Wasp',
        'Weasel',
        'Whale',
        'Wolf',
        'Woodpecker',
        'Wren',
        'Zebra',
    ];
    static readonly STATES = [
        'Adequate',
        'Affable',
        'Affectionate',
        'Aggressive',
        'Banal',
        'Bold',
        'Boring',
        'Brave',
        'Capricious',
        'Carefree',
        'Careful',
        'Caring',
        'Cheerful',
        'Clever',
        'Cocky',
        'Confiding',
        'Cowardly',
        'Cultural',
        'Cunning',
        'Curious',
        'Cynical',
        'Dashing',
        'Desperate',
        'Dexterous',
        'Diplomatic',
        'Distrustful',
        'Dynamic',
        'Easy',
        'Echidny',
        'Educated',
        'Emotional',
        'Envious',
        'Evil',
        'Fair',
        'Fanatical',
        'Frowning',
        'Gambling',
        'Generous',
        'Greedy',
        'Hardworking',
        'Hardy',
        'Impudent',
        'Incorruptible',
        'Indifferent',
        'Ingenious',
        'Insidious',
        'Lazy',
        'Loving',
        'Lucky',
        'Modest',
        'Naive',
        'Nasty',
        'Nervous',
        'Noisy',
        'Orderly',
        'Pathos',
        'Picky',
        'Polite',
        'Positive',
        'Proud',
        'Punctual',
        'Quiet',
        'Reliable',
        'Responsible',
        'Right',
        'Romantic',
        'Secretive',
        'Selfish',
        'Sincere',
        'Slow',
        'Smart',
        'Smiling',
        'Sneaky',
        'Stingy',
        'Strict',
        'Strong-willed',
        'Stubborn',
        'Sullen',
        'Sure',
        'Suspicious',
        'Tedious',
        'Tender',
        'Thoughtful',
        'Timid',
        'Touchy',
        'Unhappy',
        'Unique',
        'Unpredictable',
        'Vulgar',
        'Vulnerable',
        'Wise',
        'Witty',
    ];
}
