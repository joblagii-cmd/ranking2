export const TOP_COUNTRIES = [
  // Major English-speaking & high-demand markets
  { code: "US", name: "United States", currency: "USD", cities: ["New York", "Los Angeles", "Chicago", "Houston", "Phoenix", "Philadelphia", "San Antonio", "San Diego", "Dallas", "San Jose"] },
  { code: "CA", name: "Canada", currency: "CAD", cities: ["Toronto", "Montreal", "Vancouver", "Calgary", "Edmonton", "Ottawa", "Winnipeg", "Quebec City", "Hamilton", "Kitchener"] },
  { code: "GB", name: "United Kingdom", currency: "GBP", cities: ["London", "Birmingham", "Manchester", "Glasgow", "Liverpool", "Bristol", "Sheffield", "Leeds", "Edinburgh", "Leicester"] },
  { code: "IN", name: "India", currency: "INR", cities: ["Mumbai", "Delhi", "Bangalore", "Hyderabad", "Chennai", "Kolkata", "Pune", "Ahmedabad", "Jaipur", "Surat"] },
  { code: "AU", name: "Australia", currency: "AUD", cities: ["Sydney", "Melbourne", "Brisbane", "Perth", "Adelaide", "Gold Coast", "Canberra", "Newcastle", "Wollongong", "Hobart"] },
  { code: "DE", name: "Germany", currency: "EUR", cities: ["Berlin", "Hamburg", "Munich", "Cologne", "Frankfurt", "Stuttgart", "Düsseldorf", "Leipzig", "Dortmund", "Essen"] },
  { code: "FR", name: "France", currency: "EUR", cities: ["Paris", "Marseille", "Lyon", "Toulouse", "Nice", "Nantes", "Strasbourg", "Montpellier", "Bordeaux", "Lille"] },
  { code: "AE", name: "UAE", currency: "AED", cities: ["Dubai", "Abu Dhabi", "Sharjah", "Al Ain", "Ajman", "Ras Al Khaimah", "Fujairah", "Umm Al Quwain", "Khor Fakkan", "Dibba"] },
  { code: "SG", name: "Singapore", currency: "SGD", cities: ["Singapore City", "Jurong East", "Tampines", "Woodlands", "Sengkang", "Punggol", "Hougang", "Yishun", "Bukit Merah", "Bedok"] },
  { code: "NZ", name: "New Zealand", currency: "NZD", cities: ["Auckland", "Wellington", "Christchurch", "Hamilton", "Tauranga", "Napier", "Palmerston North", "Nelson", "Rotorua", "New Plymouth"] },
  // Europe
  { code: "AT", name: "Austria", currency: "EUR", cities: ["Vienna", "Graz", "Linz", "Salzburg", "Innsbruck", "Klagenfurt", "Villach", "Wels", "St. Pölten", "Dornbirn"] },
  { code: "BE", name: "Belgium", currency: "EUR", cities: ["Brussels", "Antwerp", "Ghent", "Charleroi", "Liège", "Bruges", "Namur", "Leuven", "Mons", "Aalst"] },
  { code: "CH", name: "Switzerland", currency: "CHF", cities: ["Zurich", "Geneva", "Basel", "Lausanne", "Bern", "Winterthur", "Lucerne", "St. Gallen", "Lugano", "Biel"] },
  { code: "NL", name: "Netherlands", currency: "EUR", cities: ["Amsterdam", "Rotterdam", "The Hague", "Utrecht", "Eindhoven", "Tilburg", "Groningen", "Almere", "Breda", "Nijmegen"] },
  { code: "SE", name: "Sweden", currency: "SEK", cities: ["Stockholm", "Gothenburg", "Malmö", "Uppsala", "Västerås", "Örebro", "Linköping", "Helsingborg", "Jönköping", "Norrköping"] },
  { code: "NO", name: "Norway", currency: "NOK", cities: ["Oslo", "Bergen", "Stavanger", "Trondheim", "Drammen", "Fredrikstad", "Kristiansand", "Sandnes", "Tromsø", "Sarpsborg"] },
  { code: "DK", name: "Denmark", currency: "DKK", cities: ["Copenhagen", "Aarhus", "Odense", "Aalborg", "Esbjerg", "Randers", "Kolding", "Horsens", "Vejle", "Roskilde"] },
  { code: "FI", name: "Finland", currency: "EUR", cities: ["Helsinki", "Espoo", "Tampere", "Vantaa", "Oulu", "Turku", "Jyväskylä", "Lahti", "Kuopio", "Pori"] },
  { code: "IE", name: "Ireland", currency: "EUR", cities: ["Dublin", "Cork", "Limerick", "Galway", "Waterford", "Drogheda", "Dundalk", "Swords", "Bray", "Navan"] },
  { code: "IT", name: "Italy", currency: "EUR", cities: ["Rome", "Milan", "Naples", "Turin", "Palermo", "Genoa", "Bologna", "Florence", "Bari", "Catania"] },
  { code: "ES", name: "Spain", currency: "EUR", cities: ["Madrid", "Barcelona", "Valencia", "Seville", "Zaragoza", "Málaga", "Murcia", "Palma", "Bilbao", "Alicante"] },
  { code: "PT", name: "Portugal", currency: "EUR", cities: ["Lisbon", "Porto", "Braga", "Amadora", "Setúbal", "Coimbra", "Funchal", "Almada", "Agualva-Cacém", "Queluz"] },
  { code: "PL", name: "Poland", currency: "PLN", cities: ["Warsaw", "Kraków", "Łódź", "Wrocław", "Poznań", "Gdańsk", "Szczecin", "Bydgoszcz", "Lublin", "Katowice"] },
  { code: "CZ", name: "Czech Republic", currency: "CZK", cities: ["Prague", "Brno", "Ostrava", "Plzeň", "Liberec", "Olomouc", "Ústí nad Labem", "České Budějovice", "Hradec Králové", "Pardubice"] },
  { code: "HU", name: "Hungary", currency: "HUF", cities: ["Budapest", "Debrecen", "Miskolc", "Szeged", "Pécs", "Győr", "Nyíregyháza", "Kecskemét", "Székesfehérvár", "Szombathely"] },
  { code: "RO", name: "Romania", currency: "RON", cities: ["Bucharest", "Cluj-Napoca", "Timișoara", "Iași", "Constanța", "Craiova", "Brașov", "Galați", "Ploiești", "Oradea"] },
  { code: "GR", name: "Greece", currency: "EUR", cities: ["Athens", "Thessaloniki", "Patras", "Piraeus", "Larissa", "Heraklion", "Peristeri", "Kallithea", "Acharnes", "Kalamaria"] },
  { code: "HR", name: "Croatia", currency: "EUR", cities: ["Zagreb", "Split", "Rijeka", "Osijek", "Zadar", "Pula", "Slavonski Brod", "Karlovac", "Varaždin", "Šibenik"] },
  { code: "SK", name: "Slovakia", currency: "EUR", cities: ["Bratislava", "Košice", "Prešov", "Žilina", "Banská Bystrica", "Nitra", "Trnava", "Martin", "Trenčín", "Poprad"] },
  { code: "BG", name: "Bulgaria", currency: "BGN", cities: ["Sofia", "Plovdiv", "Varna", "Burgas", "Ruse", "Stara Zagora", "Pleven", "Sliven", "Dobrich", "Shumen"] },
  { code: "RS", name: "Serbia", currency: "RSD", cities: ["Belgrade", "Novi Sad", "Niš", "Kragujevac", "Subotica", "Zrenjanin", "Pančevo", "Čačak", "Novi Pazar", "Kruševac"] },
  { code: "UA", name: "Ukraine", currency: "UAH", cities: ["Kyiv", "Kharkiv", "Odesa", "Dnipro", "Donetsk", "Zaporizhzhia", "Lviv", "Kryvyi Rih", "Mykolaiv", "Mariupol"] },
  { code: "LU", name: "Luxembourg", currency: "EUR", cities: ["Luxembourg City", "Esch-sur-Alzette", "Differdange", "Dudelange", "Ettelbruck", "Diekirch", "Wiltz", "Echternach", "Rumelange", "Grevenmacher"] },
  { code: "IS", name: "Iceland", currency: "ISK", cities: ["Reykjavik", "Kópavogur", "Hafnarfjörður", "Akureyri", "Garðabær", "Mosfellsbær", "Árborg", "Akranes", "Fjarðabyggð", "Borgarbyggð"] },
  { code: "MT", name: "Malta", currency: "EUR", cities: ["Valletta", "Birkirkara", "Qormi", "Mosta", "Żabbar", "St. Paul's Bay", "Sliema", "Żejtun", "Ħamrun", "Naxxar"] },
  { code: "CY", name: "Cyprus", currency: "EUR", cities: ["Nicosia", "Limassol", "Larnaca", "Paphos", "Famagusta", "Kyrenia", "Paralimni", "Strovolos", "Lakatamia", "Aglandjia"] },
  { code: "EE", name: "Estonia", currency: "EUR", cities: ["Tallinn", "Tartu", "Narva", "Pärnu", "Kohtla-Järve", "Viljandi", "Rakvere", "Maardu", "Sillamäe", "Kuressaare"] },
  { code: "LV", name: "Latvia", currency: "EUR", cities: ["Riga", "Daugavpils", "Liepāja", "Jelgava", "Jūrmala", "Ventspils", "Rēzekne", "Valmiera", "Jēkabpils", "Ogre"] },
  { code: "LT", name: "Lithuania", currency: "EUR", cities: ["Vilnius", "Kaunas", "Klaipėda", "Šiauliai", "Panevėžys", "Alytus", "Marijampolė", "Mažeikiai", "Jonava", "Utena"] },
  { code: "SI", name: "Slovenia", currency: "EUR", cities: ["Ljubljana", "Maribor", "Celje", "Kranj", "Velenje", "Koper", "Novo Mesto", "Ptuj", "Trbovlje", "Kamnik"] },
  { code: "MK", name: "North Macedonia", currency: "MKD", cities: ["Skopje", "Bitola", "Kumanovo", "Prilep", "Tetovo", "Veles", "Štip", "Ohrid", "Gostivar", "Strumica"] },
  { code: "AL", name: "Albania", currency: "ALL", cities: ["Tirana", "Durrës", "Vlorë", "Shkodër", "Fier", "Korçë", "Elbasan", "Berat", "Lushnjë", "Kavajë"] },
  { code: "BA", name: "Bosnia and Herzegovina", currency: "BAM", cities: ["Sarajevo", "Banja Luka", "Tuzla", "Zenica", "Mostar", "Bijeljina", "Brčko", "Prijedor", "Trebinje", "Doboj"] },
  { code: "ME", name: "Montenegro", currency: "EUR", cities: ["Podgorica", "Nikšić", "Herceg Novi", "Pljevlja", "Bijelo Polje", "Cetinje", "Bar", "Berane", "Budva", "Ulcinj"] },
  // Asia
  { code: "JP", name: "Japan", currency: "JPY", cities: ["Tokyo", "Osaka", "Yokohama", "Nagoya", "Sapporo", "Fukuoka", "Kobe", "Kyoto", "Kawasaki", "Saitama"] },
  { code: "CN", name: "China", currency: "CNY", cities: ["Beijing", "Shanghai", "Guangzhou", "Shenzhen", "Chengdu", "Chongqing", "Tianjin", "Wuhan", "Hangzhou", "Xi'an"] },
  { code: "KR", name: "South Korea", currency: "KRW", cities: ["Seoul", "Busan", "Incheon", "Daegu", "Daejeon", "Gwangju", "Suwon", "Ulsan", "Seongnam", "Goyang"] },
  { code: "MY", name: "Malaysia", currency: "MYR", cities: ["Kuala Lumpur", "George Town", "Ipoh", "Shah Alam", "Petaling Jaya", "Johor Bahru", "Subang Jaya", "Klang", "Ampang Jaya", "Kuching"] },
  { code: "TH", name: "Thailand", currency: "THB", cities: ["Bangkok", "Nonthaburi", "Pak Kret", "Hat Yai", "Chiang Mai", "Phra Pradaeng", "Udon Thani", "Khon Kaen", "Nakhon Ratchasima", "Surat Thani"] },
  { code: "ID", name: "Indonesia", currency: "IDR", cities: ["Jakarta", "Surabaya", "Bandung", "Bekasi", "Medan", "Tangerang", "Depok", "Semarang", "Palembang", "Makassar"] },
  { code: "PH", name: "Philippines", currency: "PHP", cities: ["Manila", "Quezon City", "Caloocan", "Davao", "Cebu City", "Zamboanga", "Antipolo", "Taguig", "Pasig", "Cagayan de Oro"] },
  { code: "VN", name: "Vietnam", currency: "VND", cities: ["Ho Chi Minh City", "Hanoi", "Da Nang", "Hai Phong", "Can Tho", "Bien Hoa", "Hue", "Nha Trang", "Buon Ma Thuot", "Quy Nhon"] },
  { code: "PK", name: "Pakistan", currency: "PKR", cities: ["Karachi", "Lahore", "Faisalabad", "Rawalpindi", "Gujranwala", "Peshawar", "Multan", "Islamabad", "Hyderabad", "Quetta"] },
  { code: "BD", name: "Bangladesh", currency: "BDT", cities: ["Dhaka", "Chittagong", "Sylhet", "Rajshahi", "Khulna", "Comilla", "Barishal", "Rangpur", "Mymensingh", "Narayanganj"] },
  { code: "LK", name: "Sri Lanka", currency: "LKR", cities: ["Colombo", "Dehiwala", "Moratuwa", "Sri Jayawardenepura Kotte", "Negombo", "Kandy", "Jaffna", "Kalmunai", "Trincomalee", "Galle"] },
  { code: "MM", name: "Myanmar", currency: "MMK", cities: ["Yangon", "Mandalay", "Naypyidaw", "Bago", "Mawlamyine", "Taunggyi", "Sittwe", "Myeik", "Pathein", "Hpa-An"] },
  { code: "KH", name: "Cambodia", currency: "KHR", cities: ["Phnom Penh", "Siem Reap", "Battambang", "Sihanoukville", "Kampong Cham", "Prey Veng", "Pursat", "Takeo", "Kampot", "Poipet"] },
  { code: "HK", name: "Hong Kong", currency: "HKD", cities: ["Hong Kong", "Kowloon", "Tsuen Wan", "Tuen Mun", "Sha Tin", "Tai Po", "Sai Kung", "Yuen Long", "North District", "Kwai Tsing"] },
  { code: "TW", name: "Taiwan", currency: "TWD", cities: ["Taipei", "New Taipei", "Kaohsiung", "Taichung", "Taoyuan", "Tainan", "Hsinchu", "Keelung", "Chiayi", "Changhua"] },
  { code: "MN", name: "Mongolia", currency: "MNT", cities: ["Ulaanbaatar", "Erdenet", "Darkhan", "Choibalsan", "Ölgii", "Sainshand", "Bayankhongor", "Mörön", "Dalanzadgad", "Arvaikheer"] },
  { code: "NP", name: "Nepal", currency: "NPR", cities: ["Kathmandu", "Pokhara", "Lalitpur", "Bharatpur", "Biratnagar", "Birganj", "Dharan", "Butwal", "Hetauda", "Janakpur"] },
  { code: "UZ", name: "Uzbekistan", currency: "UZS", cities: ["Tashkent", "Namangan", "Samarkand", "Andijan", "Nukus", "Qarshi", "Bukhara", "Fergana", "Jizzakh", "Chirchiq"] },
  { code: "KZ", name: "Kazakhstan", currency: "KZT", cities: ["Almaty", "Nur-Sultan", "Shymkent", "Karaganda", "Aktobe", "Taraz", "Pavlodar", "Ust-Kamenogorsk", "Semey", "Atyrau"] },
  { code: "GE", name: "Georgia", currency: "GEL", cities: ["Tbilisi", "Kutaisi", "Batumi", "Rustavi", "Zugdidi", "Gori", "Poti", "Samtredia", "Khashuri", "Senaki"] },
  { code: "AM", name: "Armenia", currency: "AMD", cities: ["Yerevan", "Gyumri", "Vanadzor", "Vagharshapat", "Abovyan", "Kapan", "Hrazdan", "Alaverdi", "Goris", "Sevan"] },
  { code: "AZ", name: "Azerbaijan", currency: "AZN", cities: ["Baku", "Ganja", "Sumqayit", "Mingachevir", "Nakhchivan", "Shirvan", "Lankaran", "Shaki", "Yevlakh", "Khankendi"] },
  { code: "IL", name: "Israel", currency: "ILS", cities: ["Jerusalem", "Tel Aviv", "Haifa", "Rishon LeZion", "Petah Tikva", "Ashdod", "Netanya", "Beer Sheva", "Bnei Brak", "Holon"] },
  { code: "JO", name: "Jordan", currency: "JOD", cities: ["Amman", "Zarqa", "Irbid", "Russeifa", "Wadi as-Sir", "Aqaba", "Madaba", "As-Salt", "Mafraq", "Jerash"] },
  { code: "LB", name: "Lebanon", currency: "LBP", cities: ["Beirut", "Tripoli", "Sidon", "Tyre", "Nabatieh", "Jounieh", "Baalbek", "Zahle", "Byblos", "Aley"] },
  { code: "KW", name: "Kuwait", currency: "KWD", cities: ["Kuwait City", "Ahmadi", "Hawalli", "Salmiya", "Farwaniya", "Jahra", "Mubarak Al-Kabeer", "Mahboula", "Shuwaikh", "Salwa"] },
  { code: "QA", name: "Qatar", currency: "QAR", cities: ["Doha", "Al Rayyan", "Umm Salal", "Al Wakrah", "Al Khor", "Madinat ash Shamal", "Dukhan", "Mesaieed", "Al Ghuwariyah", "Al Jumayliyah"] },
  { code: "BH", name: "Bahrain", currency: "BHD", cities: ["Manama", "Riffa", "Muharraq", "Hamad Town", "A'ali", "Isa Town", "Sitra", "Budaiya", "Jidhafs", "Jidd Hafs"] },
  { code: "OM", name: "Oman", currency: "OMR", cities: ["Muscat", "Seeb", "Salalah", "Bawshar", "Sohar", "As Suwayq", "Ibra", "Sur", "Ibri", "Rustaq"] },
  { code: "SA", name: "Saudi Arabia", currency: "SAR", cities: ["Riyadh", "Jeddah", "Mecca", "Medina", "Dammam", "Khobar", "Tabuk", "Abha", "Buraidah", "Khamis Mushait"] },
  { code: "IQ", name: "Iraq", currency: "IQD", cities: ["Baghdad", "Basra", "Mosul", "Erbil", "Najaf", "Karbala", "Kirkuk", "Sulaymaniyah", "Fallujah", "Ramadi"] },
  { code: "IR", name: "Iran", currency: "IRR", cities: ["Tehran", "Mashhad", "Isfahan", "Karaj", "Shiraz", "Tabriz", "Qom", "Ahvaz", "Kermanshah", "Urmia"] },
  { code: "AF", name: "Afghanistan", currency: "AFN", cities: ["Kabul", "Kandahar", "Herat", "Mazar-i-Sharif", "Kunduz", "Jalalabad", "Ghazni", "Lashkar Gah", "Khost", "Faizabad"] },
  // Americas
  { code: "BR", name: "Brazil", currency: "BRL", cities: ["São Paulo", "Rio de Janeiro", "Brasília", "Salvador", "Fortaleza", "Belo Horizonte", "Manaus", "Curitiba", "Recife", "Porto Alegre"] },
  { code: "MX", name: "Mexico", currency: "MXN", cities: ["Mexico City", "Guadalajara", "Monterrey", "Puebla", "Toluca", "Tijuana", "León", "Juárez", "Torreón", "Querétaro"] },
  { code: "AR", name: "Argentina", currency: "ARS", cities: ["Buenos Aires", "Córdoba", "Rosario", "La Plata", "Mar del Plata", "Tucumán", "Salta", "Santa Fe", "San Juan", "Mendoza"] },
  { code: "CL", name: "Chile", currency: "CLP", cities: ["Santiago", "Puente Alto", "Antofagasta", "Viña del Mar", "Valparaíso", "San Bernardo", "Temuco", "Talca", "Rancagua", "Iquique"] },
  { code: "CO", name: "Colombia", currency: "COP", cities: ["Bogotá", "Medellín", "Cali", "Barranquilla", "Cartagena", "Cúcuta", "Bucaramanga", "Pereira", "Santa Marta", "Ibagué"] },
  { code: "PE", name: "Peru", currency: "PEN", cities: ["Lima", "Arequipa", "Trujillo", "Chiclayo", "Iquitos", "Piura", "Cusco", "Chimbote", "Huancayo", "Tacna"] },
  { code: "VE", name: "Venezuela", currency: "VES", cities: ["Caracas", "Maracaibo", "Valencia", "Barquisimeto", "Maracay", "Ciudad Guayana", "Barcelona", "Maturín", "Petare", "Turmero"] },
  { code: "EC", name: "Ecuador", currency: "USD", cities: ["Quito", "Guayaquil", "Cuenca", "Santo Domingo", "Machala", "Durán", "Manta", "Portoviejo", "Loja", "Ambato"] },
  { code: "BO", name: "Bolivia", currency: "BOB", cities: ["Santa Cruz de la Sierra", "El Alto", "La Paz", "Cochabamba", "Oruro", "Sucre", "Potosí", "Tarija", "Trinidad", "Sacaba"] },
  { code: "PY", name: "Paraguay", currency: "PYG", cities: ["Asunción", "Ciudad del Este", "San Lorenzo", "Luque", "Capiatá", "Lambaré", "Fernando de la Mora", "Limpio", "Ñemby", "Encarnación"] },
  { code: "UY", name: "Uruguay", currency: "UYU", cities: ["Montevideo", "Ciudad de la Costa", "Salto", "Paysandú", "Las Piedras", "Rivera", "Maldonado", "Tacuarembó", "Melo", "Mercedes"] },
  { code: "CR", name: "Costa Rica", currency: "CRC", cities: ["San José", "Cartago", "Heredia", "Alajuela", "Limón", "Liberia", "Pérez Zeledón", "San Carlos", "Desamparados", "Paraíso"] },
  { code: "PA", name: "Panama", currency: "PAB", cities: ["Panama City", "San Miguelito", "Tocumen", "Las Cumbres", "David", "Arraiján", "Colón", "La Chorrera", "Santiago", "Chitré"] },
  { code: "GT", name: "Guatemala", currency: "GTQ", cities: ["Guatemala City", "Mixco", "Villa Nueva", "San Juan Sacatepéquez", "Quetzaltenango", "Escuintla", "Chinautla", "Villa Canales", "Petapa", "Antigua"] },
  { code: "HN", name: "Honduras", currency: "HNL", cities: ["Tegucigalpa", "San Pedro Sula", "Choloma", "La Ceiba", "El Progreso", "Choluteca", "Comayagua", "Puerto Cortés", "La Lima", "Villanueva"] },
  { code: "SV", name: "El Salvador", currency: "USD", cities: ["San Salvador", "Soyapango", "Santa Ana", "San Miguel", "Mejicanos", "Santa Tecla", "Apopa", "Delgado", "Sonsonate", "Ilopango"] },
  { code: "NI", name: "Nicaragua", currency: "NIO", cities: ["Managua", "León", "Masaya", "Tipitapa", "Matagalpa", "Chinandega", "Granada", "Estelí", "Ciudad Sandino", "Jinotega"] },
  { code: "CU", name: "Cuba", currency: "CUP", cities: ["Havana", "Santiago de Cuba", "Camagüey", "Holguín", "Santa Clara", "Guantánamo", "Bayamo", "Las Tunas", "Cienfuegos", "Pinar del Río"] },
  { code: "DO", name: "Dominican Republic", currency: "DOP", cities: ["Santo Domingo", "Santiago de los Caballeros", "San Pedro de Macorís", "La Romana", "San Cristóbal", "Puerto Plata", "Higüey", "La Vega", "Moca", "San Francisco de Macorís"] },
  { code: "JM", name: "Jamaica", currency: "JMD", cities: ["Kingston", "Spanish Town", "Portmore", "Montego Bay", "Mandeville", "Ocho Rios", "May Pen", "Old Harbour", "Linstead", "Half Way Tree"] },
  { code: "TT", name: "Trinidad and Tobago", currency: "TTD", cities: ["Port of Spain", "Chaguanas", "San Fernando", "Arima", "Marabella", "Couva", "Tunapuna", "Sangre Grande", "Penal", "Diego Martin"] },
  // Africa
  { code: "NG", name: "Nigeria", currency: "NGN", cities: ["Lagos", "Kano", "Ibadan", "Abuja", "Port Harcourt", "Benin City", "Maiduguri", "Zaria", "Aba", "Jos"] },
  { code: "ZA", name: "South Africa", currency: "ZAR", cities: ["Johannesburg", "Cape Town", "Durban", "Pretoria", "Soweto", "Port Elizabeth", "Pietermaritzburg", "Benoni", "Tembisa", "East London"] },
  { code: "EG", name: "Egypt", currency: "EGP", cities: ["Cairo", "Alexandria", "Giza", "Shubra El-Kheima", "Port Said", "Suez", "Luxor", "Mansoura", "El-Mahalla El-Kubra", "Tanta"] },
  { code: "KE", name: "Kenya", currency: "KES", cities: ["Nairobi", "Mombasa", "Kisumu", "Nakuru", "Eldoret", "Thika", "Malindi", "Kitale", "Garissa", "Kakamega"] },
  { code: "GH", name: "Ghana", currency: "GHS", cities: ["Accra", "Kumasi", "Tamale", "Sekondi-Takoradi", "Ashaiman", "Sunyani", "Cape Coast", "Obuasi", "Teshie", "Tema"] },
  { code: "TZ", name: "Tanzania", currency: "TZS", cities: ["Dar es Salaam", "Mwanza", "Zanzibar City", "Arusha", "Mbeya", "Morogoro", "Tanga", "Dodoma", "Kigoma", "Moshi"] },
  { code: "ET", name: "Ethiopia", currency: "ETB", cities: ["Addis Ababa", "Dire Dawa", "Mekele", "Gondar", "Adama", "Hawassa", "Bahir Dar", "Dessie", "Jimma", "Jijiga"] },
  { code: "MA", name: "Morocco", currency: "MAD", cities: ["Casablanca", "Fes", "Marrakech", "Tangier", "Salé", "Rabat", "Meknès", "Kenitra", "Agadir", "Tetouan"] },
  { code: "DZ", name: "Algeria", currency: "DZD", cities: ["Algiers", "Oran", "Constantine", "Batna", "Djelfa", "Sétif", "Annaba", "Sidi Bel Abbès", "Biskra", "Tébessa"] },
  { code: "TN", name: "Tunisia", currency: "TND", cities: ["Tunis", "Sfax", "Sousse", "Kairouan", "Biserta", "Gabès", "Aryanah", "Gafsa", "El-Mourouj", "Kasserine"] },
  { code: "CM", name: "Cameroon", currency: "XAF", cities: ["Yaoundé", "Douala", "Garoua", "Kousseri", "Bamenda", "Maroua", "Bafoussam", "Mokolo", "Ngaoundéré", "Bertoua"] },
  { code: "CI", name: "Ivory Coast", currency: "XOF", cities: ["Abidjan", "Bouaké", "Daloa", "Korhogo", "Yamoussoukro", "Man", "Divo", "Gagnoa", "San-Pédro", "Soubré"] },
  { code: "SN", name: "Senegal", currency: "XOF", cities: ["Dakar", "Pikine", "Touba", "Thiès", "Rufisque", "Saint-Louis", "Kaolack", "Mbour", "Ziguinchor", "Diourbel"] },
  { code: "UG", name: "Uganda", currency: "UGX", cities: ["Kampala", "Gulu", "Lira", "Mbarara", "Jinja", "Bwizibwera", "Mbale", "Mukono", "Kasese", "Masaka"] },
  { code: "ZM", name: "Zambia", currency: "ZMW", cities: ["Lusaka", "Kitwe", "Ndola", "Kabwe", "Chingola", "Mufulira", "Livingstone", "Luanshya", "Kasama", "Chipata"] },
  { code: "ZW", name: "Zimbabwe", currency: "ZWL", cities: ["Harare", "Bulawayo", "Chitungwiza", "Mutare", "Gweru", "Epworth", "Kwekwe", "Kadoma", "Masvingo", "Chinhoyi"] },
  { code: "SD", name: "Sudan", currency: "SDG", cities: ["Omdurman", "Khartoum", "Khartoum North", "Port Sudan", "Kassala", "Al-Obeid", "Wad Madani", "Al-Gadaref", "Atbara", "El Fasher"] },
  { code: "AO", name: "Angola", currency: "AOA", cities: ["Luanda", "Huambo", "Lobito", "Benguela", "Kuito", "Lubango", "Malanje", "Namibe", "Soyo", "Cabinda"] },
  { code: "MZ", name: "Mozambique", currency: "MZN", cities: ["Maputo", "Matola", "Nampula", "Beira", "Chimoio", "Nacala", "Quelimane", "Tete", "Xai-Xai", "Inhambane"] },
  { code: "MG", name: "Madagascar", currency: "MGA", cities: ["Antananarivo", "Toamasina", "Antsirabe", "Fianarantsoa", "Mahajanga", "Toliara", "Antsiranana", "Ambovombe", "Morondava", "Moramanga"] },
  { code: "RW", name: "Rwanda", currency: "RWF", cities: ["Kigali", "Butare", "Gitarama", "Musanze", "Gisenyi", "Byumba", "Cyangugu", "Nyamagabe", "Rwamagana", "Kibungo"] },
  // Oceania
  { code: "FJ", name: "Fiji", currency: "FJD", cities: ["Suva", "Nasinu", "Lautoka", "Nausori", "Labasa", "Ba", "Sigatoka", "Nadi", "Levuka", "Tavua"] },
  { code: "PG", name: "Papua New Guinea", currency: "PGK", cities: ["Port Moresby", "Lae", "Mount Hagen", "Madang", "Wewak", "Goroka", "Kokopo", "Kimbe", "Arawa", "Kavieng"] },
];


export const JOB_TITLES = [
  "Software Engineer", "Senior Software Engineer", "Full Stack Developer", "Frontend Developer", "Backend Developer",
  "DevOps Engineer", "Cloud Architect", "Data Scientist", "Machine Learning Engineer", "Data Analyst",
  "Product Manager", "Project Manager", "Scrum Master", "Business Analyst", "UX Designer",
  "UI Designer", "Graphic Designer", "Marketing Manager", "Digital Marketing Specialist", "SEO Specialist",
  "Content Writer", "Copywriter", "Social Media Manager", "Sales Manager", "Account Executive",
  "Customer Success Manager", "HR Manager", "Recruiter", "Finance Manager", "Accountant",
  "Financial Analyst", "Operations Manager", "Supply Chain Manager", "Logistics Coordinator", "Warehouse Manager",
  "Quality Assurance Engineer", "Security Engineer", "Network Engineer", "Systems Administrator", "Database Administrator",
  "Mobile Developer", "iOS Developer", "Android Developer", "React Native Developer", "Flutter Developer",
  "Technical Writer", "Solutions Architect", "IT Support Specialist", "CRM Manager", "E-commerce Manager",
  "Data Engineer", "BI Developer", "Automation Engineer", "Embedded Systems Engineer", "Firmware Developer",
  "Electrical Engineer", "Mechanical Engineer", "Civil Engineer", "Chemical Engineer", "Biomedical Engineer",
  "Healthcare Administrator", "Nurse", "Pharmacist", "Medical Coder", "Clinical Data Manager",
  "Legal Counsel", "Compliance Officer", "Risk Analyst", "Procurement Specialist", "Brand Manager",
  "Event Manager", "PR Manager", "Training Coordinator", "Learning & Development Manager", "Talent Acquisition Specialist",
];

export const SENIORITY_LEVELS = ["Junior", "Mid-Level", "Senior", "Lead", "Principal", "Staff", "Associate", "Director of"];

export const EMPLOYMENT_TYPES = ["FULL_TIME", "PART_TIME", "CONTRACTOR", "TEMPORARY", "INTERN"];

export const SALARY_RANGES: Record<string, [number, number][]> = {
  US: [[50000, 80000], [80000, 120000], [120000, 160000], [160000, 200000], [200000, 280000]],
  CA: [[45000, 70000], [70000, 100000], [100000, 140000], [140000, 180000], [180000, 240000]],
  GB: [[30000, 50000], [50000, 75000], [75000, 100000], [100000, 140000], [140000, 200000]],
  IN: [[300000, 600000], [600000, 1200000], [1200000, 2000000], [2000000, 3500000], [3500000, 6000000]],
  AU: [[55000, 80000], [80000, 110000], [110000, 150000], [150000, 200000], [200000, 280000]],
  DE: [[35000, 55000], [55000, 80000], [80000, 110000], [110000, 150000], [150000, 200000]],
  FR: [[30000, 50000], [50000, 70000], [70000, 100000], [100000, 140000], [140000, 190000]],
  AE: [[60000, 100000], [100000, 150000], [150000, 220000], [220000, 300000], [300000, 450000]],
  SG: [[40000, 70000], [70000, 100000], [100000, 140000], [140000, 200000], [200000, 300000]],
  NZ: [[45000, 70000], [70000, 95000], [95000, 130000], [130000, 180000], [180000, 240000]],
  // Europe
  AT: [[35000, 55000], [55000, 80000], [80000, 110000], [110000, 150000], [150000, 200000]],
  BE: [[35000, 55000], [55000, 80000], [80000, 110000], [110000, 150000], [150000, 200000]],
  CH: [[70000, 110000], [110000, 150000], [150000, 200000], [200000, 260000], [260000, 350000]],
  NL: [[35000, 55000], [55000, 80000], [80000, 110000], [110000, 150000], [150000, 210000]],
  SE: [[350000, 550000], [550000, 750000], [750000, 1000000], [1000000, 1350000], [1350000, 1800000]],
  NO: [[450000, 650000], [650000, 900000], [900000, 1200000], [1200000, 1600000], [1600000, 2200000]],
  DK: [[300000, 480000], [480000, 660000], [660000, 880000], [880000, 1200000], [1200000, 1600000]],
  FI: [[30000, 50000], [50000, 70000], [70000, 95000], [95000, 130000], [130000, 180000]],
  IE: [[35000, 55000], [55000, 80000], [80000, 110000], [110000, 150000], [150000, 210000]],
  IT: [[25000, 40000], [40000, 60000], [60000, 85000], [85000, 120000], [120000, 170000]],
  ES: [[22000, 38000], [38000, 55000], [55000, 75000], [75000, 105000], [105000, 150000]],
  PT: [[18000, 30000], [30000, 45000], [45000, 65000], [65000, 90000], [90000, 130000]],
  PL: [[60000, 100000], [100000, 160000], [160000, 230000], [230000, 320000], [320000, 450000]],
  CZ: [[500000, 800000], [800000, 1200000], [1200000, 1700000], [1700000, 2400000], [2400000, 3500000]],
  HU: [[4000000, 7000000], [7000000, 11000000], [11000000, 16000000], [16000000, 23000000], [23000000, 35000000]],
  RO: [[40000, 70000], [70000, 110000], [110000, 160000], [160000, 230000], [230000, 330000]],
  GR: [[18000, 28000], [28000, 42000], [42000, 60000], [60000, 85000], [85000, 120000]],
  HR: [[80000, 140000], [140000, 220000], [220000, 320000], [320000, 450000], [450000, 650000]],
  SK: [[18000, 30000], [30000, 45000], [45000, 65000], [65000, 90000], [90000, 130000]],
  BG: [[25000, 45000], [45000, 70000], [70000, 100000], [100000, 140000], [140000, 200000]],
  RS: [[1200000, 2000000], [2000000, 3200000], [3200000, 4800000], [4800000, 7000000], [7000000, 10000000]],
  UA: [[300000, 600000], [600000, 1100000], [1100000, 1800000], [1800000, 2800000], [2800000, 4500000]],
  LU: [[50000, 80000], [80000, 110000], [110000, 150000], [150000, 200000], [200000, 270000]],
  IS: [[6000000, 9000000], [9000000, 13000000], [13000000, 18000000], [18000000, 25000000], [25000000, 35000000]],
  MT: [[20000, 32000], [32000, 48000], [48000, 68000], [68000, 95000], [95000, 140000]],
  CY: [[22000, 35000], [35000, 52000], [52000, 75000], [75000, 105000], [105000, 150000]],
  EE: [[18000, 30000], [30000, 45000], [45000, 65000], [65000, 90000], [90000, 130000]],
  LV: [[16000, 27000], [27000, 42000], [42000, 62000], [62000, 88000], [88000, 125000]],
  LT: [[18000, 30000], [30000, 46000], [46000, 68000], [68000, 95000], [95000, 140000]],
  SI: [[25000, 40000], [40000, 58000], [58000, 82000], [82000, 115000], [115000, 165000]],
  MK: [[250000, 450000], [450000, 720000], [720000, 1100000], [1100000, 1600000], [1600000, 2400000]],
  AL: [[700000, 1300000], [1300000, 2200000], [2200000, 3500000], [3500000, 5500000], [5500000, 8500000]],
  BA: [[20000, 35000], [35000, 55000], [55000, 80000], [80000, 115000], [115000, 170000]],
  ME: [[12000, 20000], [20000, 32000], [32000, 48000], [48000, 70000], [70000, 105000]],
  // Asia
  JP: [[3000000, 5000000], [5000000, 8000000], [8000000, 12000000], [12000000, 17000000], [17000000, 25000000]],
  CN: [[80000, 150000], [150000, 260000], [260000, 400000], [400000, 600000], [600000, 900000]],
  KR: [[30000000, 50000000], [50000000, 75000000], [75000000, 110000000], [110000000, 160000000], [160000000, 240000000]],
  MY: [[30000, 55000], [55000, 90000], [90000, 140000], [140000, 200000], [200000, 300000]],
  TH: [[300000, 600000], [600000, 1100000], [1100000, 1800000], [1800000, 2800000], [2800000, 4500000]],
  ID: [[60000000, 120000000], [120000000, 220000000], [220000000, 380000000], [380000000, 600000000], [600000000, 1000000000]],
  PH: [[300000, 600000], [600000, 1100000], [1100000, 1800000], [1800000, 2800000], [2800000, 4500000]],
  VN: [[120000000, 250000000], [250000000, 480000000], [480000000, 800000000], [800000000, 1300000000], [1300000000, 2200000000]],
  PK: [[800000, 1600000], [1600000, 3000000], [3000000, 5500000], [5500000, 9000000], [9000000, 15000000]],
  BD: [[400000, 800000], [800000, 1500000], [1500000, 2800000], [2800000, 4800000], [4800000, 8500000]],
  LK: [[1200000, 2500000], [2500000, 4500000], [4500000, 8000000], [8000000, 14000000], [14000000, 24000000]],
  MM: [[6000000, 12000000], [12000000, 22000000], [22000000, 38000000], [38000000, 60000000], [60000000, 100000000]],
  KH: [[5000, 10000], [10000, 18000], [18000, 30000], [30000, 50000], [50000, 80000]],
  HK: [[200000, 360000], [360000, 560000], [560000, 800000], [800000, 1200000], [1200000, 1800000]],
  TW: [[600000, 1000000], [1000000, 1600000], [1600000, 2400000], [2400000, 3600000], [3600000, 5500000]],
  MN: [[12000000, 22000000], [22000000, 38000000], [38000000, 60000000], [60000000, 90000000], [90000000, 140000000]],
  NP: [[400000, 800000], [800000, 1400000], [1400000, 2400000], [2400000, 4000000], [4000000, 7000000]],
  UZ: [[12000000, 25000000], [25000000, 50000000], [50000000, 90000000], [90000000, 150000000], [150000000, 250000000]],
  KZ: [[3000000, 6000000], [6000000, 11000000], [11000000, 18000000], [18000000, 28000000], [28000000, 45000000]],
  GE: [[20000, 38000], [38000, 65000], [65000, 110000], [110000, 170000], [170000, 280000]],
  AM: [[2000000, 4000000], [4000000, 7500000], [7500000, 13000000], [13000000, 22000000], [22000000, 38000000]],
  AZ: [[8000, 16000], [16000, 30000], [30000, 52000], [52000, 85000], [85000, 140000]],
  IL: [[120000, 200000], [200000, 320000], [320000, 480000], [480000, 700000], [700000, 1100000]],
  JO: [[8000, 14000], [14000, 24000], [24000, 40000], [40000, 65000], [65000, 110000]],
  LB: [[30000000, 60000000], [60000000, 110000000], [110000000, 180000000], [180000000, 280000000], [280000000, 450000000]],
  KW: [[5000, 9000], [9000, 15000], [15000, 24000], [24000, 38000], [38000, 60000]],
  QA: [[60000, 110000], [110000, 180000], [180000, 280000], [280000, 420000], [420000, 660000]],
  BH: [[8000, 15000], [15000, 26000], [26000, 42000], [42000, 65000], [65000, 105000]],
  OM: [[8000, 14000], [14000, 24000], [24000, 38000], [38000, 60000], [60000, 95000]],
  SA: [[60000, 110000], [110000, 180000], [180000, 280000], [280000, 420000], [420000, 660000]],
  IQ: [[18000000, 35000000], [35000000, 65000000], [65000000, 110000000], [110000000, 175000000], [175000000, 290000000]],
  IR: [[3000000000, 6000000000], [6000000000, 12000000000], [12000000000, 22000000000], [22000000000, 38000000000], [38000000000, 65000000000]],
  AF: [[600000, 1200000], [1200000, 2200000], [2200000, 3800000], [3800000, 6500000], [6500000, 11000000]],
  // Americas
  BR: [[40000, 80000], [80000, 140000], [140000, 220000], [220000, 340000], [340000, 560000]],
  MX: [[150000, 300000], [300000, 540000], [540000, 900000], [900000, 1400000], [1400000, 2300000]],
  AR: [[3000000, 7000000], [7000000, 14000000], [14000000, 25000000], [25000000, 42000000], [42000000, 75000000]],
  CL: [[14000000, 26000000], [26000000, 44000000], [44000000, 70000000], [70000000, 110000000], [110000000, 180000000]],
  CO: [[30000000, 60000000], [60000000, 110000000], [110000000, 180000000], [180000000, 290000000], [290000000, 480000000]],
  PE: [[25000, 50000], [50000, 90000], [90000, 150000], [150000, 240000], [240000, 400000]],
  VE: [[200, 600], [600, 1400], [1400, 3000], [3000, 6500], [6500, 15000]],
  EC: [[10000, 20000], [20000, 36000], [36000, 60000], [60000, 95000], [95000, 160000]],
  BO: [[40000, 80000], [80000, 150000], [150000, 260000], [260000, 430000], [430000, 720000]],
  PY: [[30000000, 60000000], [60000000, 110000000], [110000000, 190000000], [190000000, 320000000], [320000000, 540000000]],
  UY: [[500000, 900000], [900000, 1600000], [1600000, 2700000], [2700000, 4500000], [4500000, 7500000]],
  CR: [[7000000, 14000000], [14000000, 26000000], [26000000, 44000000], [44000000, 72000000], [72000000, 120000000]],
  PA: [[12000, 22000], [22000, 38000], [38000, 60000], [60000, 95000], [95000, 160000]],
  GT: [[60000, 120000], [120000, 220000], [220000, 380000], [380000, 630000], [630000, 1100000]],
  HN: [[150000, 300000], [300000, 560000], [560000, 950000], [950000, 1600000], [1600000, 2800000]],
  SV: [[8000, 16000], [16000, 28000], [28000, 46000], [46000, 75000], [75000, 130000]],
  NI: [[120000, 240000], [240000, 450000], [450000, 780000], [780000, 1300000], [1300000, 2300000]],
  CU: [[15000, 35000], [35000, 80000], [80000, 180000], [180000, 380000], [380000, 800000]],
  DO: [[600000, 1200000], [1200000, 2200000], [2200000, 3800000], [3800000, 6500000], [6500000, 11000000]],
  JM: [[1500000, 3000000], [3000000, 5500000], [5500000, 9500000], [9500000, 16000000], [16000000, 27000000]],
  TT: [[60000, 120000], [120000, 210000], [210000, 360000], [360000, 600000], [600000, 1000000]],
  // Africa
  NG: [[3000000, 7000000], [7000000, 15000000], [15000000, 28000000], [28000000, 50000000], [50000000, 95000000]],
  ZA: [[150000, 320000], [320000, 580000], [580000, 950000], [950000, 1600000], [1600000, 2800000]],
  EG: [[100000, 220000], [220000, 420000], [420000, 750000], [750000, 1300000], [1300000, 2400000]],
  KE: [[600000, 1400000], [1400000, 2800000], [2800000, 5000000], [5000000, 9000000], [9000000, 17000000]],
  GH: [[50000, 110000], [110000, 210000], [210000, 380000], [380000, 680000], [680000, 1300000]],
  TZ: [[6000000, 14000000], [14000000, 28000000], [28000000, 52000000], [52000000, 95000000], [95000000, 180000000]],
  ET: [[150000, 380000], [380000, 780000], [780000, 1500000], [1500000, 2800000], [2800000, 5500000]],
  MA: [[60000, 130000], [130000, 250000], [250000, 430000], [430000, 720000], [720000, 1300000]],
  DZ: [[500000, 1100000], [1100000, 2200000], [2200000, 3900000], [3900000, 7000000], [7000000, 13000000]],
  TN: [[20000, 45000], [45000, 90000], [90000, 160000], [160000, 280000], [280000, 520000]],
  CM: [[5000000, 11000000], [11000000, 22000000], [22000000, 40000000], [40000000, 70000000], [70000000, 130000000]],
  CI: [[5000000, 11000000], [11000000, 22000000], [22000000, 40000000], [40000000, 70000000], [70000000, 130000000]],
  SN: [[4000000, 9000000], [9000000, 18000000], [18000000, 33000000], [33000000, 60000000], [60000000, 110000000]],
  UG: [[10000000, 22000000], [22000000, 45000000], [45000000, 85000000], [85000000, 155000000], [155000000, 300000000]],
  ZM: [[80000, 180000], [180000, 360000], [360000, 660000], [660000, 1200000], [1200000, 2300000]],
  ZW: [[2000, 5000], [5000, 12000], [12000, 26000], [26000, 55000], [55000, 130000]],
  SD: [[50000, 120000], [120000, 260000], [260000, 520000], [520000, 1000000], [1000000, 2200000]],
  AO: [[500000, 1200000], [1200000, 2500000], [2500000, 4500000], [4500000, 8500000], [8500000, 18000000]],
  MZ: [[200000, 500000], [500000, 1100000], [1100000, 2200000], [2200000, 4500000], [4500000, 9500000]],
  MG: [[2000000, 5000000], [5000000, 12000000], [12000000, 26000000], [26000000, 55000000], [55000000, 130000000]],
  RW: [[2000000, 5000000], [5000000, 12000000], [12000000, 26000000], [26000000, 55000000], [55000000, 130000000]],
  // Oceania
  FJ: [[20000, 40000], [40000, 70000], [70000, 110000], [110000, 170000], [170000, 270000]],
  PG: [[30000, 65000], [65000, 130000], [130000, 230000], [230000, 400000], [400000, 720000]],
};

export const SKILLS_BY_DOMAIN: Record<string, string[]> = {
  tech: ["JavaScript", "TypeScript", "Python", "React", "Node.js", "AWS", "Docker", "Kubernetes", "SQL", "Git", "REST APIs", "GraphQL", "CI/CD", "Agile", "Microservices"],
  design: ["Figma", "Adobe XD", "Sketch", "Photoshop", "Illustrator", "UI/UX", "Prototyping", "User Research", "Design Systems", "Accessibility"],
  data: ["Python", "R", "SQL", "Tableau", "Power BI", "Machine Learning", "TensorFlow", "PyTorch", "Statistics", "Data Visualization", "Excel", "Spark"],
  marketing: ["Google Ads", "Facebook Ads", "SEO", "SEM", "Content Strategy", "Analytics", "HubSpot", "Salesforce", "CRM", "Email Marketing"],
  finance: ["Excel", "SAP", "QuickBooks", "Financial Modeling", "Forecasting", "GAAP", "Risk Management", "Budgeting", "Auditing", "Bloomberg"],
  general: ["Communication", "Leadership", "Problem Solving", "Team Management", "Microsoft Office", "Project Management", "Stakeholder Management", "Analytical Thinking"],
};

export const JOB_DESCRIPTIONS_TEMPLATES: string[] = [
  `We are looking for a talented {title} to join our dynamic team at {company}. In this role, you will be responsible for designing, developing, and maintaining {domain} solutions that drive business growth and innovation.

**Key Responsibilities:**
- Collaborate with cross-functional teams to define and implement new features
- Write clean, maintainable, and well-documented code/work
- Participate in code reviews and contribute to best practices
- Identify and resolve performance bottlenecks and bugs
- Mentor junior team members and share knowledge across the organization
- Communicate effectively with stakeholders to understand business requirements

**Requirements:**
- {experience} years of experience in a similar role
- Strong proficiency in {skills}
- Excellent problem-solving and analytical skills
- Bachelor's degree in a relevant field or equivalent practical experience
- Strong communication and collaboration skills

**What We Offer:**
- Competitive salary of {salary} per year
- Comprehensive health, dental, and vision insurance
- {remote_perk}
- Generous PTO and paid holidays
- Learning and development budget
- Collaborative and inclusive work environment`,

  `{company} is seeking a {title} who is passionate about building innovative solutions. This is an exciting opportunity to make a real impact in a fast-growing organization.

**About the Role:**
As a {title}, you will play a key role in shaping the future of our {domain} capabilities. You will work closely with our product, engineering, and business teams to deliver high-quality solutions.

**What You'll Do:**
- Lead and execute {domain} initiatives from conception to delivery
- Work with stakeholders across the business to identify opportunities
- Develop and implement strategies that align with company goals
- Analyze data and metrics to measure impact and drive improvements
- Stay up-to-date with industry trends and best practices
- Build and maintain strong relationships with internal and external partners

**Your Background:**
- {experience}+ years of relevant experience
- Expertise in {skills}
- Proven track record of delivering results in a fast-paced environment
- Strong analytical and strategic thinking skills
- Excellent written and verbal communication abilities

**Compensation & Benefits:**
- Annual salary: {salary}
- {remote_perk}
- Stock options / performance bonus
- Premium health insurance
- 401k/pension with company match
- Flexible working hours`,

  `Join {company} as a {title} and be part of our mission to transform the industry. We're a team of driven professionals who love what we do and are committed to excellence.

**The Opportunity:**
We're expanding our team and looking for a skilled {title} with strong expertise in {domain}. This role offers tremendous growth potential and the chance to work on challenging, meaningful projects.

**Day-to-Day Responsibilities:**
- Plan, prioritize, and execute {domain} projects to meet deadlines
- Collaborate with team members across departments
- Create detailed documentation and reports
- Conduct research and analysis to support decision-making
- Present findings and recommendations to leadership
- Continuously improve processes and workflows

**Must-Have Qualifications:**
- Minimum {experience} years of experience as a {title} or similar
- In-depth knowledge of {skills}
- Strong attention to detail and organizational skills
- Ability to manage multiple projects simultaneously
- Team player with a proactive mindset

**Perks & Benefits:**
- Salary range: {salary}
- {remote_perk}
- Health and wellness allowance
- Professional development opportunities
- Team offsites and company events
- Modern office with great amenities`,
];
