export type Lang = 'vi' | 'en';

/**
 * Both languages are real routes — `/` is Vietnamese, `/en` is English — rather
 * than one page that swaps strings on the client. A crawler that only ever sees
 * the default language cannot index the other one, and this page exists to be
 * found.
 */
export const LANGS: Lang[] = ['vi', 'en'];

export function pathFor(lang: Lang, path = ''): string {
  return lang === 'en' ? `/en${path}` : path || '/';
}

/** The counterpart URL for the language switch, keeping the reader in place. */
export function otherLang(lang: Lang): Lang {
  return lang === 'vi' ? 'en' : 'vi';
}

const vi = {
  'nav.day': 'Một ngày',
  'nav.features': 'Tính năng',
  'nav.pricing': 'Giá',
  'nav.openApp': 'Mở app',
  'nav.theme': 'Giao diện',
  'nav.light': 'Sáng',
  'nav.dark': 'Tối',

  'hero.eyebrow': 'Bấm giờ · Xuất hoá đơn',
  'hero.titleA': 'Giờ của bạn là tiền.',
  'hero.titleB': 'Đếm cho đủ.',
  'hero.lede':
    'Bấm một phím là đồng hồ chạy và tiền cộng dồn theo từng giây. Cuối tháng gộp giờ chưa xuất thành hoá đơn PDF, không phải dò lại Google Sheets.',
  'hero.cta': 'Bắt đầu miễn phí',
  'hero.ctaSecondary': 'Xem tính năng',
  'hero.fineprint': 'Đăng nhập bằng Google hoặc magic link. Không cần thẻ, không cần mật khẩu.',
  'hero.at': '09:02',
  'hero.note': 'Bấm S. Đồng hồ chạy.',
  'hero.shotAlt':
    'Trang bấm giờ của Time Tracker: đồng hồ lớn, ô chọn dự án, nút bắt đầu, khung Pomodoro và log hôm nay',

  'meter.running': 'đang chạy',
  'meter.rate': '480.000 ₫/giờ',
  'meter.ofDay': '{pct}% của 8h',

  'dash.at': '10:30',
  'dash.note': 'Nghỉ tay. Xem hôm nay đã đi tới đâu.',
  'dash.title': 'Biết mình đang ở đâu, không phải đoán',
  'dash.lede':
    'Giờ hôm nay và tuần này so với mục tiêu, chuỗi ngày làm liên tục, và số giờ chưa xuất hoá đơn — tách riêng theo từng loại tiền, không quy đổi ẩu.',
  'dash.statsAlt':
    'Bốn thẻ số liệu: giờ hôm nay, giờ tuần này so với tuần trước, chuỗi ngày làm, và số giờ chưa xuất hoá đơn theo từng loại tiền',
  'dash.chartAlt': 'Biểu đồ cột giờ làm theo ngày trong 14 ngày, có đường mục tiêu và tổng ở dưới',
  'dash.cap1': 'Tổng quan',
  'dash.cap2': 'giờ/ngày · mục tiêu · chuỗi ngày làm',
  'dash.cap3': '7 / 14 / 30 ngày',

  'log.at': '13:45',
  'log.note': 'Sửa một log ghi sai giờ.',
  'log.title': 'Sổ giờ là một cái bảng, không phải một mớ ghi chú',
  'log.lede':
    'Lọc theo dự án, tag, khoảng ngày, trạng thái hoá đơn. Sửa giờ, gắn tag, đánh dấu không tính tiền. Xuất CSV khi khách muốn xem chi tiết.',
  'log.tableAlt': 'Bảng sổ giờ: cột ngày, dự án, mô tả, giờ, tiền và trạng thái hoá đơn',
  'log.cap1': 'Sổ giờ',
  'log.cap2': 'lọc · sửa · gắn tag · xuất CSV',
  'log.donutAlt':
    'Biểu đồ donut tỷ trọng thời gian theo dự án trong 14 ngày, kèm số giờ và phần trăm từng dự án',
  'log.cap3': 'Tỷ trọng dự án',
  'log.cap4': 'giờ · % · theo khoảng ngày',

  'inv.at': '16:45',
  'inv.note': 'Chốt tháng. Gộp giờ thành hoá đơn.',
  'inv.title': 'Từ giờ đã log thành hoá đơn, trong một lần bấm',
  'inv.lede':
    'Chọn dự án và kỳ làm việc, app gom mọi entry chưa xuất, làm tròn theo cấu hình của bạn, cộng VAT và cấp số hoá đơn. In ra hoặc lưu PDF — bản in luôn nền trắng để màu không lệch.',
  'inv.cap1': 'số HĐ tự tăng',
  'inv.cap2': 'VAT · hạn thanh toán',
  'inv.cap3': 'in hoặc lưu PDF',
  'inv.alt':
    'Hoá đơn in ra: khách hàng, kỳ làm việc, bảng dòng công việc theo ngày, tạm tính, VAT và tổng thanh toán',

  'rep.at': '17:20',
  'rep.note': 'Xem lại: tuần này thu được bao nhiêu.',
  'rep.title': 'Báo cáo trả lời đúng câu bạn cần hỏi',
  'rep.lede':
    'Theo dự án, theo ngày, hoặc từng dòng sẽ lên hoá đơn. Giờ thật và giờ tính tiền nằm cạnh nhau, nên bạn thấy rõ việc làm tròn ảnh hưởng bao nhiêu.',
  'rep.statsAlt': 'Thẻ số liệu báo cáo: giờ thật, giờ tính tiền, tổng tiền và số ngày làm việc',
  'rep.tableAlt': 'Bảng tổng hợp theo dự án: số entry, giờ, rate và tiền',
  'rep.cap1': 'Báo cáo',
  'rep.cap2': 'giờ thật vs giờ tính tiền',
  'rep.cap3': 'copy bảng · xuất CSV',

  'feat.at': '—',
  'feat.note': 'Những thứ chạy nền, bạn không phải nghĩ tới.',
  'feat.title': 'Phần còn lại, đã lo sẵn',
  'feat.offlineKey': 'Offline',
  'feat.offlineTitle': 'Mất mạng vẫn bấm giờ được',
  'feat.offlineBody':
    'App chạy local-first. Không có mạng thì cứ log tiếp, thay đổi được đẩy lên ngay khi mạng về.',
  'feat.syncKey': 'Sync',
  'feat.syncTitle': 'Đồng bộ mà không cần bật gì',
  'feat.syncBody': 'Mỗi thay đổi tự lên cloud. Mở máy khác, đăng nhập, dữ liệu đã ở đó.',
  'feat.pwaKey': 'PWA',
  'feat.pwaTitle': 'Cài như app thật',
  'feat.pwaBody':
    'Thêm vào Home Screen hoặc Dock, mở ra là chạy toàn màn hình, không thanh địa chỉ.',
  'feat.currencyKey': 'Đa tiền tệ',
  'feat.currencyTitle': 'VND, USD, EUR, SGD',
  'feat.currencyBody':
    'Mỗi dự án một rate và một loại tiền. Báo cáo cộng riêng từng loại, không quy đổi ẩu.',
  'feat.roundKey': 'Làm tròn',
  'feat.roundTitle': 'Làm tròn theo cách bạn tính tiền',
  'feat.roundBody': 'Lên hoặc gần nhất, bước 5/6/10/15/30 phút. Xem trước kết quả trước khi chốt.',
  'feat.langKey': 'Song ngữ',
  'feat.langTitle': 'Tiếng Việt và English',
  'feat.langBody': 'Đổi ngôn ngữ ngay trên header. Hoá đơn in ra theo đúng ngôn ngữ đang chọn.',

  'keys.start': 'bắt đầu / dừng timer, ở bất kỳ trang nào',
  'keys.manual': 'thêm log thủ công',
  'keys.palette': 'command palette — nhảy tới đâu cũng được',
  'keys.theme': 'đổi nền sáng / tối',

  'price.total': 'Tổng thanh toán',
  'price.title': 'Miễn phí. Bắt đầu bằng một phím.',
  'price.lede':
    'Không giới hạn dự án, không giới hạn log, không giới hạn hoá đơn. Dữ liệu là của bạn — tải backup JSON hoặc CSV bất cứ lúc nào.',
  'price.cta': 'Mở app và bấm Start',

  'foot.madeIn': 'Làm ở Việt Nam',
  'foot.privacy': 'Quyền riêng tư',
  'foot.terms': 'Điều khoản',
  'foot.home': 'Trang chủ',
} as const;

export type Key = keyof typeof vi;

const en: Record<Key, string> = {
  'nav.day': 'A day',
  'nav.features': 'Features',
  'nav.pricing': 'Pricing',
  'nav.openApp': 'Open app',
  'nav.theme': 'Theme',
  'nav.light': 'Light',
  'nav.dark': 'Dark',

  'hero.eyebrow': 'Track time · Send invoices',
  'hero.titleA': 'Your hours are money.',
  'hero.titleB': 'Count all of them.',
  'hero.lede':
    'One key starts the clock and the money adds up by the second. At month end, uninvoiced hours become a PDF invoice — no digging back through a spreadsheet.',
  'hero.cta': 'Start free',
  'hero.ctaSecondary': 'See features',
  'hero.fineprint': 'Sign in with Google or a magic link. No card, no password.',
  'hero.at': '09:02',
  'hero.note': 'Press S. The clock runs.',
  'hero.shotAlt':
    "Time Tracker's timer page: a large clock, a project picker, the start button, a Pomodoro panel and today's log",

  'meter.running': 'running',
  'meter.rate': '₫480,000/hr',
  'meter.ofDay': '{pct}% of 8h',

  'dash.at': '10:30',
  'dash.note': 'Coffee. Check where the day stands.',
  'dash.title': 'Know where you are, instead of guessing',
  'dash.lede':
    'Hours today and this week against your goal, your streak of working days, and how many hours are still uninvoiced — kept apart by currency, never silently converted.',
  'dash.statsAlt':
    'Four stat tiles: hours today, hours this week versus last, working-day streak, and uninvoiced hours by currency',
  'dash.chartAlt': 'Bar chart of hours per day over 14 days, with a goal line and a total below',
  'dash.cap1': 'Overview',
  'dash.cap2': 'hours/day · goal · streak',
  'dash.cap3': '7 / 14 / 30 days',

  'log.at': '13:45',
  'log.note': 'Fix an entry logged at the wrong time.',
  'log.title': 'A time log should be a table, not a pile of notes',
  'log.lede':
    'Filter by project, tag, date range, invoice status. Edit the hours, add tags, mark something non-billable. Export CSV when a client wants the detail.',
  'log.tableAlt': 'Time log table with date, project, description, hours, amount and invoice status',
  'log.cap1': 'Time log',
  'log.cap2': 'filter · edit · tag · export CSV',
  'log.donutAlt':
    'Donut chart of time share by project over 14 days, with hours and percentage per project',
  'log.cap3': 'Project share',
  'log.cap4': 'hours · % · by date range',

  'inv.at': '16:45',
  'inv.note': 'Close the month. Turn hours into an invoice.',
  'inv.title': 'Logged hours become an invoice in one click',
  'inv.lede':
    'Pick a project and a period; the app gathers every uninvoiced entry, rounds it the way you set, adds VAT and assigns a number. Print it or save a PDF — the print view stays on white so the colours come out right.',
  'inv.cap1': 'auto-incrementing number',
  'inv.cap2': 'VAT · payment terms',
  'inv.cap3': 'print or save PDF',
  'inv.alt':
    'A printed invoice: client, billing period, a table of work by date, subtotal, VAT and the amount due',

  'rep.at': '17:20',
  'rep.note': 'Look back: what did this week earn.',
  'rep.title': 'Reports answer the question you actually have',
  'rep.lede':
    'By project, by day, or line by line as it will appear on the invoice. Actual hours sit next to billable hours, so you can see exactly what rounding costs.',
  'rep.statsAlt': 'Report stat tiles: actual hours, billable hours, total amount and days worked',
  'rep.tableAlt': 'Per-project summary table: entries, hours, rate and amount',
  'rep.cap1': 'Reports',
  'rep.cap2': 'actual vs billable hours',
  'rep.cap3': 'copy table · export CSV',

  'feat.at': '—',
  'feat.note': 'The parts that run in the background.',
  'feat.title': 'The rest is already handled',
  'feat.offlineKey': 'Offline',
  'feat.offlineTitle': 'Keep tracking with no connection',
  'feat.offlineBody':
    'The app is local-first. Offline, you keep logging; the changes go up the moment the connection comes back.',
  'feat.syncKey': 'Sync',
  'feat.syncTitle': 'Syncing with nothing to switch on',
  'feat.syncBody': 'Every change goes to the cloud. Open another machine, sign in, it is there.',
  'feat.pwaKey': 'PWA',
  'feat.pwaTitle': 'Installs like a real app',
  'feat.pwaBody':
    'Add it to the Home Screen or the Dock and it opens full screen, with no address bar.',
  'feat.currencyKey': 'Currencies',
  'feat.currencyTitle': 'VND, USD, EUR, SGD',
  'feat.currencyBody':
    'A rate and a currency per project. Reports total each currency on its own — no sloppy conversion.',
  'feat.roundKey': 'Rounding',
  'feat.roundTitle': 'Round the way you actually bill',
  'feat.roundBody':
    'Up or to nearest, in steps of 5/6/10/15/30 minutes. See the result before you commit.',
  'feat.langKey': 'Bilingual',
  'feat.langTitle': 'Vietnamese and English',
  'feat.langBody':
    'Switch language from the header. Invoices print in whichever language is selected.',

  'keys.start': 'start / stop the timer, from any page',
  'keys.manual': 'add a manual entry',
  'keys.palette': 'command palette — jump anywhere',
  'keys.theme': 'switch light / dark',

  'price.total': 'Amount due',
  'price.title': 'Free. Starts with one key.',
  'price.lede':
    'No cap on projects, entries or invoices. The data is yours — download a JSON backup or CSV whenever you want.',
  'price.cta': 'Open the app and press Start',

  'foot.madeIn': 'Made in Vietnam',
  'foot.privacy': 'Privacy',
  'foot.terms': 'Terms',
  'foot.home': 'Home',
};

const TABLES: Record<Lang, Record<Key, string>> = { vi, en };

export function t(lang: Lang, key: Key, params?: Record<string, string | number>): string {
  let out: string = TABLES[lang][key] ?? vi[key];
  if (params) {
    for (const [name, value] of Object.entries(params)) {
      out = out.split(`{${name}}`).join(String(value));
    }
  }
  return out;
}
