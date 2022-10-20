'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Products', [{
      name: 'گوشی موبایل اپل مدل iPhone 13 A2634 دو سیم کارت ظرفیت 128 گیگابایت و رم 4 گیگابایت',
      description: `آیفون 13 مینی کوچک‌ترین عضو خانواده، اما قدرتمند

      تا قبل از رونمایی گوشی‌های هوشمند خانواده آیفون 12، پرچمداران این شرکت در قالب دو یا سه گوشی‌هوشمند معرفی می‌شدند. تا اینکه آیفون 12 مینی نیز در کنار گوشی‌های هوشمند خانواده آیفون 12 معرفی شد. حال گوشی‌های هوشمند خانواده آیفون 13 به عنوان جدید‌ترین پرچمداران این شرکت روانه بازار شده‌اند و بار دیگر آیفون 13 مینی به عنوان کوچکترین عضو و البته ارزان قیمت‌ترین گوشی هوشمند خانواده آیفون 13 معرفی شد. اما قیمت ارزان تر این گوشی‌هوشمند به نسبت سایر اعضای این خانواده سبب نشده تا مشخصات قوی را با خود به‌همراه نداشته باشد و آیفون 13 مینی با بهره بردن از مشخصات فنی قدرتمند، توانایی رقابت با پرچمداران اندرویدی را به‌خوبی دارد.
      طراحی و صفحه نمایش
      
      در نگاه اول تفاوت چندانی در زمینه طراحی با سری قبلی پرچمداران این شرکت و به‌خصوص آیفون 12 مینی نمی‌بینیم. اپل با توجه به طراحی بسیار جذابی که برای گوشی‌های هوشمند خانواده آیفون 12 در نظر گرفته بود و بازخورد بسیار خوبی از سمت کاربران داشت، تصمیم گرفت تا طراحی مشابهی را برای گوشی‌های هوشمند خانواده آیفون 13 در نظر بگیرد. در نمای رو به رویی این بار ناچ کوچکتری به نسبت آیفون 12 مینی برای صفحه نمایش آیفون 13 مینی در نظر گرفته شده. در قسمت پشتی هم شاهد قرار گیری دو سنسور دوربین می‌باشیم که این بار چیدمان متفاوتی با نسل قبلی خود دارند. دو سنسور دوربین قسمت پشتی به همراه فلش LED با چیدمانی ضربدری در بریدگی مربعی شکلی کنار یکدیگر قرار گرفته‌اند. متریال بسیار با‌کیفیت این گوشی هوشمند نیز سبب شده تا از استاندارد IP68 نیز پشتیبانی کند. پس با این تفاسیر، آیفون 13 مینی توانایی قرار‌گیری در عمق 6 متری آب و مدت زمان 30 دقیقه‌ای را دارد. پس با خیال راحت از این گوشی‌هوشمند در شرایط جوی متفاوت و حتی تفریحات آبی همچون شنا هم استفاده کنید. `,
      
      CategoryId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Products', null, {});
  }
};
