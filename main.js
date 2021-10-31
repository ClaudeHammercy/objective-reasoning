//1
function isAdmin(user) {
    if (user.userRole === 'ADMIN') {
        return true;
    } else {
        return false;
    }
}

//2
function getEmail(user) {
    const firstName = user.firstName.toLowerCase();
    const lastName = user.lastName.toLowerCase();
    const email = firstName + '.' + lastName + '@codeimmersives.com';
    return email;
}

//3
function getPlaylistLength(playlist) {
    playlistLength = playlist.songs.length;
    return playlistLength;
}

//4
function getHardestHomework(homework) {
  //Starting point for comparison
  let lowestScore = 100;
  //Output string
  let hardest = '';
  //Finds the lowest score
  for (let i=0; i < homework.length; i++) {
      let score = homework[i].averageScore;
      if (score < lowestScore) {
          lowestScore = score;
          hardest = homework[i].name;
      }
  }
  return hardest;
}

//5
function createPhonebook(names, phoneNumbers) {
    const phoneBook = {};
    for (let i = 0; i < names.length; i++) {
        let entryNames = names[i];
        let entryNumbers = phoneNumbers[i];
        let entry = entryNames.concat(':' + entryNumbers);
        phoneBook[entryNames] = entryNumbers;

    } return phoneBook;
}

// ┌─────────────────────────────────────┐
// │ Do not modify code below this line. │
// └─────────────────────────────────────┘

if (typeof isAdmin === 'undefined') {
    isAdmin = undefined;
}
if (typeof getEmail === 'undefined') {
    getEmail = undefined;
}
if (typeof getPlaylistLength === 'undefined') {
    getPlaylistLength = undefined;
}
if (typeof getHardestHomework === 'undefined') {
    getHardestHomework = undefined;
}
if (typeof createPhonebook === 'undefined') {
    createPhonebook = undefined;
}

module.exports = {
    isAdmin,
    getEmail,
    getPlaylistLength,
    getHardestHomework,
    createPhonebook
};