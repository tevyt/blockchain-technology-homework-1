/**
 *
 * @param {string} key
 */
function buildAlphabetMatrix(key) {
  return key
    .toUpperCase()
    .split("")
    .map((character) => {
      const alphabet = [];
      let charCode = character.charCodeAt(0);
      while (alphabet.length < 26) {
        alphabet.push(String.fromCharCode(charCode));
        charCode = (charCode + 1) % 91;
        if (charCode === 0) {
          charCode = 65;
        }
      }
      return alphabet;
    });
}

/**
 * @param {string[][]} alphabetMatrix
 * @param {string} message
 */
function encryptMessage(alphabetMatrix, message) {
  const encryptedMessage = [];

  const plainTextMessage = message.toUpperCase().split("");

  let plainTextMessageIndex = 0;
  let alphabetIndex = 0;

  while (plainTextMessageIndex < plainTextMessage.length) {
    const messageCharCode =
      plainTextMessage[plainTextMessageIndex].charCodeAt(0);
    if (messageCharCode >= 65 && messageCharCode <= 90) {
      encryptedMessage.push(
        alphabetMatrix[alphabetIndex][messageCharCode - 65]
      );
      alphabetIndex = (alphabetIndex + 1) % alphabetMatrix.length;
    } else {
      encryptedMessage.push(plainTextMessage[plainTextMessageIndex]);
    }
    plainTextMessageIndex++;
  }

  return encryptedMessage.join("");
}

function main(key, message) {
  const alphabetMatrix = buildAlphabetMatrix(key);

  console.log(alphabetMatrix);
  const encryptedMessage = encryptMessage(alphabetMatrix, message);

  console.log(encryptedMessage);
}

const message =
  "All persons born or naturalized in the United States, and subject to the jurisdiction thereof, are citizens of the United States and of the state wherein they reside. No state shall make or enforce any law which shall abridge the privileges or immunities of citizens of the United States; nor shall any state deprive any person of life, liberty, or property, without due process of law; nor deny to any person within its jurisdiction the equal protection of the laws.";
main("REASON", message);
