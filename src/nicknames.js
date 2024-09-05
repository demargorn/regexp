class Validator {
   constructor() {}

   validateUsername(name) {
      // Проверка имени на принадлежность к строке
      if (typeof name !== 'string') {
         return false;
      }

      const regex = /^[a-zA-Z0-9_-]{1,}[a-zA-Z0-9\s_-]*$/;

      if (!regex.test(name)) {
         return false;
      }

      // Проверка на наличие подряд более трех цифр
      const digitSequence = name.match(/(\d{4,})/g);

      if (digitSequence && digitSequence.length > 0) {
         return false;
      }

      // Проверка на начало и конец строки с цифрой, подчеркиванием или дефисом
      if (/^[\d_-]|[\d_-]$/.test(name)) {
         return false;
      }

      return true;
   }
}

export { Validator };
