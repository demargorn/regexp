function fixedNumber(number) {
   let result = number.replace(/[^\d+]/g, '');

   if (!result.startsWith('+') && result.charAt(0) === '8') {
      return '+7' + result.slice(1);
   }

   if (!result.startsWith('+')) {
      return '+' + result;
   } else {
      return result;
   }
}

export { fixedNumber };
