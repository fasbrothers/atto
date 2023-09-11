export const data = [
  {
    id: 1,
    paragraph: `Tarif rejalari Vazirlar Mahkamasining 9-oktabr 2020-yildagi 643-sonli qaroriga muvofiq amalga oshirildi. Avtomatlashtirilgan
    transport to'lov tizimi operatori tarif rejalarini texnik va moliyaviy amalga oshiradi`,
  },
  {
    id: 2,
    title: "Tarif qanday sotib olinadi?",
    paragraph:
      "Tegishli tarifni bir necha usulda tanlashingiz va sotib olishingiz mumkin:",
    list: [
      {
        listId: 1,
        text: "«АТТО» mobil ilovasi orqali",
      },
      {
        listId: 2,
        text: "atto.uz saytining shaxsiy kabineti orqali",
      },
      {
        listId: 3,
        text: "«Toshyo’lovchitrans» AJning barcha savdo shahobchalari orqali",
      },
    ],
  },
  {
    id: 3,
    title: "Tarif qanday aktivlashtiriladi?",
    paragraph: `Transport kartalari uchun sotib olingan tarif birinchi foydalanishda (jamoat transportida validatorga tekkizilganda) faollashadi. Boshqacha
    qilib aytganda, tarif ma'lum bir sanaga bog'liq emas va faqat birinchi to'lov qilinganda faollashadi.`,
  },
  {
    id: 4,
    title:
      "Agar siz karta balansini to'ldirsangiz va tarif sotib olmasangiz nima bo'ladi?",
    paragraph: `Agar yo'lovchi transport karta balansini to'ldirgan va tarif rejasini sotib olmagan bo'lsa, yo'l davomida pul oddiy transport kartadan
    yechib olingani kabi yo'l haqi uchun 1400 so'mdan yechiladi.  
    `,
  },
  {
    id: 5,
    title:
      "Agar kartada tarif bor bo'lsa, yo'l haqi uchun ikki marta to'layotgan bo'lsangiz nima bo'ladi?",
    paragraph: `Agar yo'lovchi tarif rejasini sotib olgan bo'lsa va validatorda ikki marta xuddi shu transportda yoki metro turniketida to'lov qilgan bo'lsa,
    transport karta hisobidan 1400 so'm yechiladi. Agar transport kartasida hisobdan chiqarish vaqtida yetarli mablag' bo'lmasa, ushbu transport kartasi bloklanadi
    va oldindan sotib olingan tarif mavjud bo'lmaydi. Transport kartani blokdan olish uchun transport kartasi hisobini to'ldirish kerak bo'ladi.`,
  },
];

const priceListBus = [
  {
    priceId: 1,
    description: "5 kun",
    price: "10000 сум",
  },
  {
    priceId: 2,
    description: "10 kun",
    price: "20000 сум",
  },
  {
    priceId: 3,
    description: "15 kun",
    price: "30000 сум",
  },
  {
    priceId: 4,
    description: "20 kun",
    price: "40000 сум",
  },
  {
    priceId: 5,
    description: "30 kun",
    price: "60000 сум",
  },
];

const priceListBusMetro = [
  {
    priceId: 1,
    description: "5 kun",
    price: "14000 сум",
  },
  {
    priceId: 2,
    description: "10 kun",
    price: "28000 сум",
  },
  {
    priceId: 3,
    description: "15 kun",
    price: "42000 сум",
  },
  {
    priceId: 4,
    description: "20 kun",
    price: "56000 сум",
  },
  {
    priceId: 5,
    description: "30 kun",
    price: "83000 сум",
  },
];

export const tariffs = [
  {
    id: 1,
    title: "Aholi uchun tariflar",
    backgroundColor: "bg-[#477ee2]",
    variants: [
      {
        shortTitle: "AV",
        title: "Avtobus aholi uchun",
        prices: [
          {
            priceId: 1,
            description: "5 kun",
            price: "20000 сум",
          },
          {
            priceId: 2,
            description: "10 kun",
            price: "40000 сум",
          },
          {
            priceId: 3,
            description: "15 kun",
            price: "60000 сум",
          },
          {
            priceId: 4,
            description: "20 kun",
            price: "80000 сум",
          },
          {
            priceId: 5,
            description: "30 kun",
            price: "120000 сум",
          },
        ],
      },
      {
        shortTitle: "AVM",
        title: "Avtobus, metro aholi uchun",
        prices: [
          {
            priceId: 1,
            description: "5 kun",
            price: "28000 сум",
          },
          {
            priceId: 2,
            description: "10 kun",
            price: "56000 сум",
          },
          {
            priceId: 3,
            description: "15 kun",
            price: "84000 сум",
          },
          {
            priceId: 4,
            description: "20 kun",
            price: "112000 сум",
          },
          {
            priceId: 5,
            description: "30 kun",
            price: "166000 сум",
          },
        ],
      },
    ],
  },
  {
    id: 2,
    title: "Nafaqaxo'r va nogironlar uchun tariflar",
    backgroundColor: "bg-[#FF6969]",
    variants: [
      {
        shortTitle: "N",
        title: "Avtobus nafaqaxo'r va nogironlar uchun",
        prices: [...priceListBus],
      },
      {
        shortTitle: "NM",
        title: "Avtobus, metro nafaqaxo'r va nogironlar uchun",
        prices: [...priceListBusMetro],
      },
    ],
  },
  {
    id: 3,
    title: "Talaba uchun tariflar",
    backgroundColor: "bg-[#f1c40f]",
    variants: [
      {
        shortTitle: "T",
        title: "Avtobus talaba uchun",
        prices: [...priceListBus],
      },
      {
        shortTitle: "TM",
        title: "Avtobus, metro talaba uchun",
        prices: [...priceListBusMetro],
      },
    ],
  },
  {
    id: 3,
    title: "O'quvchi uchun tariflar",
    backgroundColor: "bg-[#2ecc71]",
    variants: [
      {
        shortTitle: "O",
        title: "Avtobus o'quvchi uchun",
        prices: [...priceListBus],
      },
      {
        shortTitle: "O'M",
        title: "Avtobus, metro o'quvchi uchun",
        prices: [...priceListBusMetro],
      },
    ],
  },
];
