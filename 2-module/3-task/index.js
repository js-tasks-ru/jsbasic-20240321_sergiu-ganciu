let calculator = {
  /**
   * Insert values into object
   * @param {} val1
   * @param {} val2
   * @returns {}
   */
  read(val1, val2) {
    this.val1 = val1;
    this.val2 = val2;
  },

  /**
   * Calculate object's numeric properties
   * @returns {Number}
   */
  sum() {
    let sum = 0;

    for (let key in this) {
      if (Number.isFinite(this[key])) {
        sum += this[key];
      }
    }
    
    return sum;
  },

  /**
   * Multiply object's numeric properties
   * @returns {Number}
   */
  mul() {
    let mul = 1;

    for (let key in this) {
      if (Number.isFinite(this[key])) {
        mul *= this[key];
      }
    }

    return mul;
  }
};

// НЕ УДАЛЯТЬ СТРОКУ, НУЖНА ДЛЯ ПРОВЕРКИ
window.calculator = calculator; // делает ваш калькулятор доступным глобально
