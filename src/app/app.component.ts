import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  patch: any;
  trinket: any;

  patchTable = [
    {num: 0 , descrip: '“#1 Worker”'},
    {num: 1 , descrip: 'Security Guard patch'},
    {num: 2 , descrip: 'Blood Type (Reference Patch)'},
    {num: 3 , descrip: 'Red Shirt Logo'},
    {num: 4 , descrip: '“Don’t Run You’ll Only Die Tired” Backpatch'},
    {num: 5 , descrip: 'Poker Hand: Dead Mans Hand (Aces full of 8s)'},
    {num: 6 , descrip: 'Biohazard Symbol'},
    {num: 7 , descrip: 'Mr. Yuck'},
    {num: 8 , descrip: 'Nuclear Symbol'},
    {num: 9 , descrip: '“Eat The Rich”'},
    {num: 10, descrip: ' “Be Sure: Doubletap”'},
    {num: 11, descrip: ' Flame Emoji'},
    {num: 12, descrip: ' Smiley Face (Glow in the Dark)'},
    {num: 13, descrip: ' “Smile: Big Brother is Watching”'},
    {num: 14, descrip: ' Jolly Roger'},
    {num: 15, descrip: ' Viking Skull'},
    {num: 16, descrip: ' “APEX PREDATOR” (Sabertooth Skull)'},
    {num: 17, descrip: ' Pin-Up (Ace of Spades)'},
    {num: 18, descrip: ' Queen of Hearts'},
    {num: 19, descrip: ' Pin-Up (Mechanic)'},
    {num: 20, descrip: ' BOHICA (Bend Over Here It Comes)'},
    {num: 21, descrip: ' Front Towards Enemy (Claymore Mine)'},
    {num: 22, descrip: ' Pin-Up (Riding Missile)'},
    {num: 23, descrip: ' FUBAR'},
    {num: 24, descrip: ' “I’m A (Love) Machine”'},
    {num: 25, descrip: ' Medic Patch (Skull and Crossbones on Logo)'},
    {num: 26, descrip: ' HELLO MY NAME IS:'},
    {num: 27, descrip: ' “Powered By Coffee”'},
    {num: 28, descrip: ' “Take Me To Your Leader” (UFO)'},
    {num: 29, descrip: ' “DO YOUR JOB”'},
    {num: 30, descrip: ' “Take My Life (Please)”'},
    {num: 31, descrip: ' “All Out of Fucks To Give” (Astronaut with Turned Out Pockets)'},
    {num: 32, descrip: ' Allergic To Bullshit (Medical Style Patch)'},
    {num: 33,  descrip: '“Fix Me First” (Caduceus)'},
    {num: 34,  descrip: '“Upstanding Citizen”'},
    {num: 35,  descrip: 'NASA Logo'},
    {num: 36,  descrip: '“Cowboy Up” (Crossed Revolvers)'},
    {num: 37,  descrip: 'Dove in Crosshairs'},
    {num: 38,  descrip: 'Chibi Cthulhu'},
    {num: 39,  descrip: '“Welcome to the DANGER ZONE”'},
    {num: 40,  descrip: 'Skull and Crossed Wrenches'},
    {num: 41,  descrip: 'Pin-Up (Succubus)'},
    {num: 42,  descrip: '“DILLIGAF?”'},
    {num: 43,  descrip: '“DRINK / FIGHT / FUCK”'},
    {num: 44,  descrip: '“Work Hard / Party Harder”'},
    {num: 45,  descrip: 'Mudflap Girl'},
    {num: 46,  descrip: 'Fun Meter (reading: bad time)'},
    {num: 47,  descrip: '“GAME OVER” (Bride & Groom)'},
    {num: 48,  descrip: 'Heart'},
    {num: 49,  descrip: '“IMPROVE / ADAPT / OVERCOME”'},
    {num: 50,  descrip: '“SUCK IT UP”'},
    {num: 51,  descrip: 'HMFIC (Head Mother Fucker In Charge)'},
    {num: 52,  descrip: '“Troubleshooter”'},
    {num: 53,  descrip: '“IF I’M RUNNING KEEP UP” Backpatch'},
    {num: 54,  descrip: 'Crossed Hammers with Wings'},
    {num: 55,  descrip: '“Keep Well Lubricated”'},
    {num: 56,  descrip: 'Soviet Hammer & Sickle'},
    {num: 57,  descrip: '“Plays Well With Others”'},
    {num: 58,  descrip: '“Live Free and Die”'},
    {num: 59,  descrip: 'Pin-Up (Nurse): “The Louder You Scream the Faster I Come”'},
    {num: 60,  descrip: '“Meat Bag”'},
    {num: 61,  descrip: '“I Am Not A Robot”'},
    {num: 62,  descrip: 'Red Gear'},
    {num: 63,  descrip: '“I Can’t Fix Stupid”'},
    {num: 64,  descrip: '“Space IS My Home” (Sad Astronaut)'},
    {num: 65,  descrip: 'All Seeing Eye'},
    {num: 66,  descrip: '“Do I LOOK Like An Expert”'},
    {num: 67, descrip: '“NOMAD”'},
    {num: 68, descrip: '“I’m Not A Rocket Scientist / But You’re An Idiot”'},
    {num: 69, descrip: '“LONER”'},
    {num: 70, descrip: '“I Am My Brothers Keeper”'},
    {num: 71, descrip: '“Mama Tried”'},
    {num: 72, descrip: 'Black Widow Spider'},
    {num: 73, descrip: '“My Other Ride Married You”'},
    {num: 74, descrip: '“One Size Fits All” (Grenade)'},
    {num: 75, descrip: 'Grim Reaper Backpatch'},
    {num: 76, descrip: 'трахаться (Get Fucked, Russian)'},
    {num: 77, descrip: '“Smooth Operator”'},
    {num: 78, descrip: 'Atom Symbol'},
    {num: 79, descrip: '“For Science!”'},
    {num: 80, descrip: '“Actually, I Am A Rocket Scientist”'},
    {num: 81, descrip: '“Help Wanted”'},
    {num: 82, descrip: 'Princess'},
    {num: 83, descrip: '“I Like My Tools Clean / And My Lovers Dirty”'},
    {num: 84, descrip: '“GOOD BOY”'},
    {num: 85, descrip: 'Dice (Snake Eyes)'},
    {num: 86, descrip: '“Travel To Distant Exotic Places / Meet Unusual Things / Get Eaten”'},
    {num: 87, descrip: '“Good” (Brain)'},
    {num: 88, descrip: '“Bad Bitch”'},
    {num: 89, descrip: '“Too Pretty To Die”'},
    {num: 90, descrip: '“Fuck Forever” (Roses)'},
    {num: 91, descrip: 'Icarus'},
    {num: 92, descrip: '”Girls Best Friend” (Diamond)'},
    {num: 93, descrip: 'Risk of Electrocution Symbol'},
    {num: 94, descrip: 'Inverted Cross'},
    {num: 95, descrip: '“Do You Sign My Paychecks?” Backpatch'},
    {num: 96, descrip: '“I ♥ Myself”'},
    {num: 97, descrip: 'Double Cherry'},
    {num: 98, descrip: '“Volunteer”'},
    {num: 99, descrip: '“Solve Et Coagula” (Baphomet)'},
  ];
  trinketTable = [
    { num: 0, descrip: 'Preserved Insectile Aberration'},
    { num: 1, descrip: 'Faded Green Poker Chip'},
    { num: 2, descrip: 'Antique Company Script (Asteroid Mine)'},
    { num: 3, descrip: 'Dessicated Husk Doll'},
    { num: 4, descrip: 'Alien Pressed Flower (common)'},
    { num: 5, descrip: 'Necklace of Shell Casings'},
    { num: 6, descrip: 'Corroded Android Logic Core'},
    { num: 7, descrip: 'Pamphlet: Signs of Parasitical Infection'},
    { num: 8, descrip: 'Manual: Treat Your Rifle Like A Lady'},
    { num: 9, descrip: 'Bone Knife'},
    { num: 10, descrip: 'Calendar: Alien Pin-Up Art'},
    { num: 11, descrip: 'Dog Tags (Heirloom)'},
    { num: 12, descrip: 'Holographic Serpentine Dancer'},
    { num: 13, descrip: 'Snake Whiskey'},
    { num: 14, descrip: 'Medical Container, Purple Powder'},
    { num: 15, descrip: 'Pills: Male Enhancement, Shoddy'},
    { num: 16, descrip: 'Casino Playing Cards'},
    { num: 17, descrip: 'Lagomorph Foot'},
    { num: 18, descrip: 'Moonstone Ring'},
    { num: 19, descrip: 'Manual: Mining Safety and You'},
    { num: 20, descrip: 'Pamphlet: Against Human Simulacrum'},
    { num: 21, descrip: 'Animal Skull, 3 Eyes, Curled Horns'},
    { num: 22, descrip: 'Bartender’s Certification (Expired)'},
    { num: 23, descrip: 'Bent Wrench'},
    { num: 24, descrip: 'Prospecting Mug, Dented'},
    { num: 25, descrip: 'Eerie Mask'},
    { num: 26, descrip: 'Vantablack Marble'},
    { num: 27, descrip: 'Ivory Dice'},
    { num: 28, descrip: 'Tarot Cards, Worn, Pyrite Gilded edges'},
    { num: 29, descrip: 'Bag of Assorted Teeth'},
    { num: 30, descrip: 'Ashes (A Relative)'},
    { num: 31, descrip: 'DNR Beacon Necklace'},
    { num: 32, descrip: 'Cigarettes (Grinning Skull)'},
    { num: 33, descrip: 'Pills: Areca Nut'},
    { num: 34, descrip: 'Rejected Application (Colony Ship)'},
    { num: 35, descrip: 'Pamphlet: Android Overlords'},
    { num: 36, descrip: 'Smut (Seditious): The Captain, Ordered'},
    { num: 37, descrip: 'Key (Childhood Home)'},
    { num: 38, descrip: 'Manual: Panic: Harbinger of Catastrophe'},
    { num: 39, descrip: 'Token: “Is Your Morale Improving?”'},
    { num: 40, descrip: 'Phosphorescent Sticks, Neon'},
    { num: 41, descrip: 'Pamphlet: The Indifferent Stars'},
    { num: 42, descrip: 'Calendar: Military Battles'},
    { num: 43, descrip: 'Manual: Rich Captain, Poor Captain'},
    { num: 44, descrip: 'Campaign Poster (Home Planet)'},
    { num: 45, descrip: 'Pendant: Shell Fragments Suspended in Plastic'},
    { num: 46, descrip: 'Titanium Toothpick'},
    { num: 47, descrip: 'Gloves, Leather (Xenomorph Hide)'},
    { num: 48, descrip: 'Pamphlet: Zen and the Art of Cargo Arrangement'},
    { num: 49, descrip: 'Pictorial Pornography, Dogeared, Well Thumbed'},
    { num: 50, descrip: 'Brass Knuckles'},
    { num: 51, descrip: 'Fuzzy Handcuffs'},
    { num: 52, descrip: 'Journal of Grudges'},
    { num: 53, descrip: 'Stylized Cigarette Case'},
    { num: 54, descrip: 'Ball of Assorted Gauge Wire'},
    { num: 55, descrip: 'Spanner'},
    { num: 56, descrip: 'Switchblade, Ornamental'},
    { num: 57, descrip: 'Powdered Xenomorph Horn'},
    { num: 58, descrip: 'Bonsai Tree'},
    { num: 59, descrip: 'Golf Club (Putter)'},
    { num: 60, descrip: 'Trilobite Fossil'},
    { num: 61, descrip: 'Pamphlet: A Girl In Every Port'},
    { num: 62, descrip: 'Patched Overalls, Personalized'},
    { num: 63, descrip: 'Fleshy Thing Sealed in a Murky Jar'},
    { num: 64, descrip: 'Spiked Bracelet'},
    { num: 65, descrip: 'Harmonica'},
    { num: 66, descrip: 'Manual: Spacefarer\'s Almanac'},
    { num: 67, descrip: 'Faded Photograph, A Windswept Heath'},
    { num: 68, descrip: 'Stress Ball reads: Zero Stress in Zero G'},
    { num: 69, descrip: 'Manual: Moonshining With Gun Oil & Fuel'},
    { num: 70, descrip: 'Gyroscope, Bent, Tin'},
    { num: 71, descrip: 'Coffee Cup, Chipped, HAPPINESS IS MANDATORY'},
    { num: 72, descrip: 'Darts, Magnetic'},
    { num: 73, descrip: 'Spray Paint'},
    { num: 74, descrip: 'Wanted Poster, Weathered'},
    { num: 75, descrip: 'Locket, Hair Braid'},
    { num: 76, descrip: 'Pick, Miniature'},
    { num: 77, descrip: 'Blanket, Fire Retardant'},
    { num: 78, descrip: 'Hooded Parka, Fleece-Lined'},
    { num: 79, descrip: 'BB Gun'},
    { num: 80, descrip: 'Flint Hatchet'},
    { num: 81, descrip: 'Pendant: Two Astronauts form a Skull'},
    { num: 82, descrip: 'Rubik\'s Cube'},
    { num: 83, descrip: 'Manual: Survival: Eat Soup With a Knife'},
    { num: 84, descrip: 'Sputnik Pin'},
    { num: 85, descrip: 'Ushanka'},
    { num: 86, descrip: 'Trucker Cap, Mesh, Grey Alien Logo'},
    { num: 87, descrip: 'Menthol Balm'},
    { num: 88, descrip: 'Pith Helmet'},
    { num: 89, descrip: '10x10 Tarp'},
    { num: 90, descrip: 'I Ching, Missing Sticks'},
    { num: 91, descrip: 'Kukri'},
    { num: 92, descrip: 'Trench Shovel'},
    { num: 93, descrip: 'Shiv, Sharpened Butter Knife'},
    { num: 94, descrip: 'Taxidermied Cat'},
    { num: 95, descrip: 'Pamphlet: Interpreting Sheep Dreams'},
    { num: 96, descrip: 'Pair of Shot Glasses, Spent Shotgun Shells'},
    { num: 97, descrip: 'Opera Glasses'},
    { num: 98, descrip: 'Pamphlet: The Relic of Flesh'},
    { num: 99, descrip: 'Miniature Chess Set, Bone, Pieces Missing'},
  ];

  createTrinketOrPatch(min: number, max: number, isTrinket: boolean) {
    const rand = this.rollDie(min, max);

    if (isTrinket) {
      this.trinket = (this.trinketTable.find(trinket => trinket.num === rand));
    } else {
      this.patch = (this.patchTable.find(patch => patch.num === rand));
    }
  }

  private rollDie(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }
}
