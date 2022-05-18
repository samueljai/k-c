const beachListData = {
    beachList: [
        {
            description: 'This serene Grecian beauty is a Mykonos favourite.',
            image: 'https://img.delicious.com.au/OfgQpPeT/del/2019/09/agia-anna-beach-mykonos-greece-114879-2.jpg',
            index: 1,
            name: 'Agia Anna Beach, Mykonos, Greece',
        },
        {
            description:
                'An island that makes up part of the Kingdom of the Netherlands, Aruba’s beaches are famed for their azure waters.',
            image: 'https://img.delicious.com.au/DCEhvA74/del/2019/09/aruba-island-caribbean-sea-114880-2.jpg',
            index: 2,
            name: 'Aruba Island, Caribbean Sea',
        },
        {
            description:
                'This American contender earns itself a spot on the top 50 for its tranquility and privacy.',
            image: 'https://img.delicious.com.au/6M86eOVp/del/2019/09/balandra-beach-baja-california-mexico-114881-3.jpg',
            index: 3,
            name: 'Balandra Beach, Baja California, Mexico',
        },
        {
            description:
                'On the east coast of Mauritius, this secluded beach offers the perfect swimming spot for those who love still waters.',
            image: 'https://img.delicious.com.au/X4D43IIQ/del/2019/09/belle-mare-beach-mauritius-114882-1.jpg',
            index: 4,
            name: 'Belle Mare Beach, Mauritius',
        },
        {
            description:
                'This Aussie golden child is a hotspot known by surfers the world over.',
            image: 'https://img.delicious.com.au/pRAHMS0F/del/2019/09/bells-beach-victoria-australia-114883-2.jpg',
            index: 5,
            name: 'Bells Beach, Victoria, Australia',
        },
        {
            description:
                'Renowned in and outside of Australia for it’s abundance of marine life and clear waters, Ningaloo Reef in Exmouth is a must-visit beach.',
            image: 'https://img.delicious.com.au/ueJ6pM4F/del/2019/09/ningaloo-reef-exmouth-wa-australia-114913-2.jpg',
            index: 6,
            name: 'Ningaloo Reef, Exmouth, WA, Australia',
        },
        {
            description:
                'Postcard-perfect Blue Beach represents all that holidaymakers’ seaside dreams are made of.',
            image: 'https://img.delicious.com.au/EQTHB2k_/del/2019/09/blue-beach-puerto-rico-114884-1.jpg',
            index: 7,
            name: 'Blue Beach, Puerto Rico',
        },
        {
            description:
                'With the kind of Powerade-blue waters you want to dive right into, this Spanish spot is an photographer’s dream.',
            image: 'https://img.delicious.com.au/JzaemKhf/del/2019/09/cala-macarella-beach-spain-114885-1.jpg',
            index: 8,
            name: 'Cala Macarella Beach, Spain',
        },
        {
            description:
                'More than an idyllic screen saver, Castaway Island is a destination that should be visited by those travelling to Fiji.',
            image: 'https://img.delicious.com.au/0qTmrIKl/del/2019/09/castaway-island-fiji-114886-1.jpg',
            index: 9,
            name: 'Castaway Island, Fiji',
        },
        {
            description:
                'A dreamscape set in foodie paradise, this Sardinian heart throb deserves a place on beach lovers’ bucket lists.',
            image: 'https://img.delicious.com.au/CI5lE3Vz/del/2019/09/chia-beach-sardinia-italy-114887-2.jpg',
            index: 10,
            name: 'Chia Beach, Sardinia, Italy',
        },
        {
            description:
                'Away from the bustle of Bali’s busier beaches lies Crystal Bay, a peaceful beach with room to move (and snorkel!).',
            image: 'https://img.delicious.com.au/yW0FyX6e/del/2019/09/crystal-bay-bali-indonesia-114888-2.jpg',
            index: 11,
            name: 'Crystal Bay, Bali, Indonesia',
        },
        {
            description:
                'A Philippine icon, El Nido is a thing of beauty and well worth a visit.',
            image: 'https://img.delicious.com.au/Ohvmgb2S/del/2019/09/el-nido-palawan-philippines-114889-1.jpg',
            index: 12,
            name: 'El Nido, Palawan, Philippines',
        },
        {
            description:
                'Surrounded by beautiful architecture, Greece’s largest island is home to one of it’s most beautiful beaches.',
            image: 'https://img.delicious.com.au/BiGH_wTS/del/2019/09/elafoniysi-crete-greece-114890-1.jpg',
            index: 13,
            name: 'Elafonísi, Crete, Greece',
        },
        {
            description:
                'A short walk from popular Coogee beach leads beachgoers to this beautiful blue-green bay.',
            image: 'https://img.delicious.com.au/K0y4xVox/del/2019/09/gordons-bay-nsw-australia-114891-2.jpg',
            index: 14,
            name: "Gordon's Bay, NSW, Australia",
        },
        {
            description:
                'A stunning beach in the Atlantic Ocean, Grace Bay is about as quiet and private as they come.',
            image: 'https://img.delicious.com.au/mVAQY-q7/del/2019/09/grace-bay-turks-and-caicos-114892-1.jpg',
            index: 15,
            name: 'Grace Bay, Turks and Caicos',
        },
        {
            description:
                'This swoon-worthy New Zealand Bay is one you’ll want to take the camera to.',
            image: 'https://img.delicious.com.au/quCP16aS/del/2019/09/hahei-bay-new-zealand-114893-2.jpg',
            index: 16,
            name: 'Hahei Bay, New Zealand',
        },
        {
            description:
                'A beach beloved by surfers, locally and internationally, Sri Lanka’s Hikkaduwa is one for wave chasers.',
            image: 'https://img.delicious.com.au/vdK7Oage/del/2019/09/hikkaduwa-sri-lanka-114894-1.jpg',
            index: 17,
            name: 'Hikkaduwa, Sri Lanka',
        },
        {
            description:
                'In the North Atlantic lies beautiful Horseshoe Bay – a restful cove of Bermuda.',
            image: 'https://img.delicious.com.au/-GJiXxJo/del/2019/09/horseshoe-bay-bermuda-114896-1.jpg',
            index: 18,
            name: 'Horseshoe Bay, Bermuda',
        },
        {
            description:
                'Famed for its incredibly white, glistening sand, Hyam’s Beach is picturesque in any weather.',
            image: 'https://img.delicious.com.au/78Ic1hyg/del/2019/09/hyams-beach-nsw-australia-114897-2.jpg',
            index: 19,
            name: 'Hyams Beach, NSW, Australia',
        },
        {
            description:
                'A bustling beach, Ipanema is a go-to for people watching in Brazil.',
            image: 'https://img.delicious.com.au/MS7dzJch/del/2019/09/impanema-beach-brazil-114898-2.jpg',
            index: 20,
            name: 'Impanema Beach, Brazil',
        },
        {
            description:
                'Japan mightn’t be the first destination that springs to mind when you picture sandy beaches, but Okinawa Island is home to some of the best.',
            image: 'https://img.delicious.com.au/DxLwiHiC/del/2019/09/ishigaki-okinawa-japan-114899-2.jpg',
            index: 21,
            name: 'Ishigaki, Okinawa, Japan',
        },
        {
            description:
                'Byron Bay’s worst-kept secret, Wategos Beach is a go-to spot at any time of year.',
            image: 'https://img.delicious.com.au/qaoF9hxK/del/2019/09/wategos-beach-australia-114928-1.jpg',
            index: 22,
            name: 'Wategos Beach, Australia',
        },
        {
            description:
                'The beaches that span the Isle of Pines in New Caledonia are what might show up if you Googled ‘perfect beaches’.',
            image: 'https://img.delicious.com.au/IxS2Mf_j/del/2019/09/isle-of-pines-new-caledonia-114900-1.jpg',
            index: 23,
            name: 'Isle of Pines, New Caledonia',
        },
        {
            description:
                'Visited by beach lovers from all over the world, Hawaii’s Kauna ‘oa Beach is a calm setting for a dip in the sea.',
            image: 'https://img.delicious.com.au/qOzXnsZw/del/2019/09/kauna-yoa-beach-hawaii-114901-2.jpg',
            index: 24,
            name: 'Kauna ‘oa Beach, Hawaii',
        },
        {
            description:
                'It might draw the crowds, but there’s plenty of room in the water off Ko Samui’s sparkling shores.',
            image: 'https://img.delicious.com.au/Nu76euva/del/2019/09/ko-samui-thailand-114902-1.jpg',
            index: 25,
            name: 'Ko Samui, Thailand',
        },
        {
            description:
                'Off the coast of Port Macquarie, in the Tasman sea, Lord Howe Island is the proud home of tranquil Ned’s Beach.',
            image: 'https://img.delicious.com.au/VdmEyWHD/del/2019/09/neds-beach-lord-howe-island-114912-1.jpg',
            index: 26,
            name: "Ned's Beach, Lord Howe Island",
        },
        {
            description:
                'Its proximity to pinxtos bars alone makes San Sebastian’s main beach a must-visit for food (and beach) lovers.',
            image: 'https://img.delicious.com.au/efSQGqdl/del/2019/09/la-concha-san-sebastian-spain-114903-1.jpg',
            index: 27,
            name: 'La Concha, San Sebastian, Spain',
        },
        {
            description:
                'Grand rock formations stand proudly on the sands of this pretty Seychelles site.',
            image: 'https://img.delicious.com.au/imeoG2TX/del/2019/09/la-digue-island-seychelles-114904-1.jpg',
            index: 28,
            name: 'La Digue Island, Seychelles',
        },
        {
            description:
                'A natural beauty, the pink waters that border the beach at Lake Hillier look too pretty to be real.',
            image: 'https://img.delicious.com.au/iVfmgzoG/del/2019/09/lake-hillier-wa-australia-114905-2.jpg',
            index: 29,
            name: 'Lake Hillier, WA, Australia',
        },
        {
            description:
                'Visit Aukland’s Lion Rock by night to see an incredible sea of stars fill the skies.',
            image: 'https://img.delicious.com.au/N3bLZa1c/del/2019/09/lion-rock-piha-auckland-114906-1.jpg',
            index: 30,
            name: 'Lion Rock, Piha, Auckland',
        },
        {
            description:
                'Set on the Great Barrier Reef in Tropical North Queensland, Lizard Isand’s shores form a memorable sight.',
            image: 'https://img.delicious.com.au/5DRgijvX/del/2019/09/lizard-island-qld-australia-114907-2.jpg',
            index: 31,
            name: 'Lizard Island, QLD, Australia',
        },
        {
            description:
                'Nestled within the Eastern Caribbean, this British island is home to some of the softest sand beaches in the world.',
            image: 'https://img.delicious.com.au/FVoL7iW7/del/2019/09/maundays-bay-anguilla-114908-1.jpg',
            index: 32,
            name: 'Maundays Bay, Anguilla',
        },
        {
            description:
                'You’ll need to wait to visit beautiful Maya Beach, which is reopening to the public in 2021.',
            image: 'https://img.delicious.com.au/POTzIgPV/del/2019/09/maya-bay-phi-phi-114910-1.jpg',
            index: 33,
            name: 'Maya Bay, Phi Phi',
        },
        {
            description:
                'Laze on gorgeous Mondello beach by day, and feast on Sicilian fare by night.',
            image: 'https://img.delicious.com.au/xf-2tNAt/del/2019/09/mondello-sicily-italy-114911-2.jpg',
            index: 34,
            name: 'Mondello, Sicily, Italy',
        },
        {
            description:
                'On the shores of one of Queensland’s most beloved coastal towns sits this stunning headland and its resplendent beach.',
            image: 'https://img.delicious.com.au/GT7OuyPY/del/2019/09/noosa-heads-qld-australia-114914-2.jpg',
            index: 35,
            name: 'Noosa Heads, QLD, Australia',
        },
        {
            description:
                'You could hardly read a list of 50 beautiful beaches without expecting to see an entry from the magnificent Maldives – and this beach is one of its best.',
            image: 'https://img.delicious.com.au/pg4apPY6/del/2019/09/north-maley-atoll-maldives-114915-1.jpg',
            index: 36,
            name: 'North Malé Atoll, Maldives',
        },
        {
            description:
                'Nudey Beach on Fitzroy Island is a utopia for snorkelers and swimmers alike.',
            image: 'https://img.delicious.com.au/81yv1AE9/del/2019/09/nudey-beach-qld-australia-114916-2.jpg',
            index: 37,
            name: 'Nudey Beach QLD, Australia',
        },
        {
            description:
                'Scattered with Roman ruins and surrounded by tree-house accommodation, the waters of Olympos super salty – making them perfect for floating.',
            image: 'https://img.delicious.com.au/gJ4RUTbN/del/2019/09/olympos-turkey-114918-1.jpg',
            index: 38,
            name: 'Olympos, Turkey',
        },
        {
            description:
                'Take a Spanish sojourn to this beautiful corner of the world, where  the order of the day is relaxing by the ocean.',
            image: 'https://img.delicious.com.au/neb1M6A2/del/2019/09/platja-de-formentor-mallorca-spain-114919-2.jpg',
            index: 39,
            name: 'Platja de Formentor, Mallorca, Spain',
        },
        {
            description:
                'Not all Cancun beaches are made for partying, Playa Del Norte is located on an island just off the mainland – affording its visitors a bounty of privacy.',
            image: 'https://img.delicious.com.au/IIWPXEXT/del/2019/09/playa-del-norte-cancun-mexico-114920-2.jpg',
            index: 40,
            name: 'Playa Del Norte, Cancun, Mexico',
        },
        {
            description:
                'A sprawling, 7km Whitsundays paradise, White Haven Beach in Queensland is a zen-inducing sight.',
            image: 'https://img.delicious.com.au/9sgktS_z/del/2019/09/white-haven-beach-qld-australia-114929-2.jpg',
            index: 41,
            name: 'White Haven Beach, QLD, Australia',
        },
        {
            description:
                'There are no shortage of stunning beaches in Portugal, but Praia do Cabedelo is one of its finest.',
            image: 'https://img.delicious.com.au/7yvAFYl-/del/2019/09/praia-do-cabedelo-minho-portugal-114921-1.jpg',
            index: 42,
            name: 'Praia do Cabedelo, Minho, Portugal',
        },
        {
            description:
                'This Icelandic beach might not boast swimming-friendly temperatures much of the year, but the light show is pretty impressive of an evening.',
            image: 'https://img.delicious.com.au/JFteKM5_/del/2019/09/reynisfjara-beach-iceland-114922-2.jpg',
            index: 43,
            name: 'Reynisfjara Beach, Iceland',
        },
        {
            description:
                'A popular choice for swimming, fishing, snorkelling and scuba diving, this South Australian Beach has it all.',
            image: 'https://img.delicious.com.au/qIKHJHE-/del/2019/09/second-valley-beach-sa-australia-114923-2.jpg',
            index: 44,
            name: 'Second Valley Beach, SA, Australia',
        },
        {
            description:
                'Pristine sands, turquoise waters and an unlikely chance of running into anyone you know. What more could you want from a beach?',
            image: 'https://img.delicious.com.au/PavuOQQd/del/2019/09/seven-miles-beach-grand-cayman-cayman-islands-114924-1.jpg',
            index: 45,
            name: 'Seven Miles Beach, Grand Cayman, Cayman Islands',
        },
        {
            description:
                'Between bites of amazing Mexican dishes, take a dip in the cooling waters of Tulum.',
            image: 'https://img.delicious.com.au/ZGWjquj7/del/2019/09/tulum-quintana-roo-mexico-114925-1.jpg',
            index: 46,
            name: 'Tulum, Quintana Roo, Mexico',
        },
        {
            description:
                'Aptly named Turquoise Bay is antidote to a busy mind. Here, swims and beach sleeps are the order of the day.',
            image: 'https://img.delicious.com.au/AGiyIyY_/del/2019/09/turquoise-bay-wa-australia-114926-2.jpg',
            index: 47,
            name: 'Turquoise Bay, WA, Australia',
        },
        {
            description:
                'Park your vintage car by the beach and dive into the deep-blue waters of Varadero, Cuba.',
            image: 'https://img.delicious.com.au/h0uW_EvA/del/2019/09/varadero-beach-cuba-114927-2.jpg',
            index: 48,
            name: 'Varadero Beach, Cuba',
        },
        {
            description:
                'You mightn’t want to dip your toes in these waters during the cooler months, but this Tasmanian treat is scenic year round.',
            image: 'https://img.delicious.com.au/nW7fUqhw/del/2019/09/wine-glass-bay-tas-australia-114930-2.jpg',
            index: 49,
            name: 'Wine Glass Bay, TAS, Australia',
        },
        {
            description:
                'Never fear, there’s no rat in sight at Zlatni Rat Beach – which forms a unique shape on the Croatian coastline.',
            image: 'https://img.delicious.com.au/cNlby9ho/del/2019/09/zlatni-rat-beach-croatia-114931-1.jpg',
            index: 50,
            name: 'Zlatni Rat Beach, Croatia',
        },
    ],
};

const getBeachListData = (returnData: boolean) => {
    if (returnData) {
        return beachListData;
    } else {
        return null;
    }
};

export { getBeachListData };
