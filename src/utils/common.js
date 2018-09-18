function S4 () {
  return (((1 + Math.random ()) * 0x10000) | 0).toString (16).substring (1);
}

const common = {
  /**
   * 生成随机guid
   */
  guid () {
    return (
      S4 () +
      S4 () +
      '-' +
      S4 () +
      '-' +
      S4 () +
      '-' +
      S4 () +
      '-' +
      S4 () +
      S4 () +
      S4 ()
    );
  },
  /**
   * 原型扩展
   */
  useExtends () {
    /**
     * 根据条件移除元素
     * @param {function} where 
     */
    Array.prototype.remove = function (where) {
      this.filter (where).forEach (r => {
        var index = this.indexOf (r);
        this.splice (index, 1);
      });
    };

    /**
     * 如果字符串超过长度,则截取
     * @param {int}} length 
     */
    String.prototype.substringIfTooLong = function (length) {
      if (!this) return '';
      if (this.length <= length) return this;
      return this.substring (0, length) + '...';
    };

    /**
     * 对象设为只读
     */
    Object.prototype.readonly = function () {
      if (!this) return;
      if (typeof this != 'object') return;
      Object.freeze (this);
      for (let key in this) {
        if (typeof this[key] === 'object') Object.freeze (this[key]);
        this[key].readonly();
      }
    };
  },
};

export default common;
