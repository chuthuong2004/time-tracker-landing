import { Colophon, Masthead } from '@/components/Chrome';
import { CONTACT, LAST_UPDATED } from '@/lib/site';
import { pathFor, type Lang } from '@/lib/i18n';

function Shell({ lang, path, children }: { lang: Lang; path: string; children: React.ReactNode }) {
  return (
    <>
      <Masthead lang={lang} path={path} nav={false} />
      <main className="sheet" lang={lang}>
        <article className="doc">{children}</article>
      </main>
      <Colophon lang={lang} />
    </>
  );
}

export function PrivacyPage({ lang }: { lang: Lang }) {
  const vi = lang === 'vi';
  return (
    <Shell lang={lang} path="/privacy">
      <h1>{vi ? 'Quyền riêng tư' : 'Privacy'}</h1>
      <p className="doc-meta">
        {vi ? 'Cập nhật' : 'Updated'} {LAST_UPDATED}
      </p>

      <p>
        {vi
          ? 'Time Tracker là công cụ bấm giờ và xuất hoá đơn. Trang này nói rõ app thu thập gì, vì sao, và bạn kiểm soát được những gì.'
          : 'Time Tracker is a time tracker and invoicing tool. This page says what the app collects, why, and what you control.'}
      </p>

      <h2>{vi ? 'App thu thập gì' : 'What the app collects'}</h2>
      <ul>
        <li>
          <strong>{vi ? 'Email và tên hiển thị' : 'Email and display name'}</strong>
          {vi
            ? ' — lấy từ tài khoản Google khi bạn đăng nhập, hoặc từ email bạn nhập khi dùng magic link. Dùng để nhận diện tài khoản của bạn, không dùng vào việc gì khác.'
            : ' — from your Google account when you sign in, or from the address you type for a magic link. Used to identify your account and nothing else.'}
        </li>
        <li>
          <strong>{vi ? 'Dữ liệu bạn tạo trong app' : 'What you create in the app'}</strong>
          {vi
            ? ' — dự án, log giờ, hoá đơn, cài đặt. Đây là nội dung công việc của bạn.'
            : ' — projects, time entries, invoices, settings. This is your work.'}
        </li>
      </ul>
      <p>
        {vi ? 'App ' : 'The app '}
        <strong>{vi ? 'không' : 'does not'}</strong>
        {vi
          ? ' chạy quảng cáo, không gắn tracker của bên thứ ba, không bán dữ liệu, và không đọc email hay file nào trong tài khoản Google của bạn. Phạm vi quyền khi đăng nhập bằng Google chỉ gồm '
          : ' run ads, embed third-party trackers, sell data, or read any mail or file in your Google account. The Google sign-in scope is only '}
        <code>email</code> {vi ? 'và' : 'and'} <code>profile</code>.
      </p>

      <h2>{vi ? 'Dữ liệu nằm ở đâu' : 'Where the data lives'}</h2>
      <p>
        {vi
          ? 'Mọi thứ được lưu trước tiên trong trình duyệt của bạn (localStorage) để app dùng được khi mất mạng, rồi đồng bộ lên cơ sở dữ liệu Supabase dưới tài khoản của bạn. Quyền truy cập được kiểm soát ở tầng cơ sở dữ liệu (row level security): mỗi tài khoản chỉ đọc và ghi được đúng dữ liệu của mình.'
          : 'Everything is written to your browser first (localStorage) so the app works offline, then synced to a Supabase database under your account. Access is enforced in the database itself with row level security: an account can only read and write its own rows.'}
      </p>

      <h2>{vi ? 'Bạn kiểm soát được gì' : 'What you control'}</h2>
      <ul>
        <li>
          <strong>{vi ? 'Tải về' : 'Download'}</strong>
          {vi
            ? ' — vào Cài đặt, tải toàn bộ dữ liệu dưới dạng JSON hoặc CSV, bất cứ lúc nào.'
            : ' — from Settings, export everything as JSON or CSV, whenever you want.'}
        </li>
        <li>
          <strong>{vi ? 'Xoá' : 'Erase'}</strong>
          {vi
            ? ' — nút "Xoá sạch dữ liệu" trong Cài đặt xoá toàn bộ nội dung của bạn khỏi máy và khỏi cloud.'
            : ' — the "Erase all data" button in Settings clears your content from this device and from the cloud.'}
        </li>
        <li>
          <strong>{vi ? 'Xoá tài khoản' : 'Delete the account'}</strong>
          {vi ? ' — gửi email tới ' : ' — email '}
          {CONTACT}
          {vi ? ', tài khoản và toàn bộ dữ liệu sẽ được xoá.' : ' and the account and all its data are removed.'}
        </li>
      </ul>

      <h2>{vi ? 'Tiện ích mở rộng cho Chrome' : 'The Chrome extension'}</h2>
      <p>
        {vi
          ? 'Tiện ích mở rộng bấm giờ nhanh không tạo một tài khoản riêng. Một content script trên app.timetracker.io.vn đọc phiên đăng nhập mà app đã lưu, rồi dùng đúng phiên đó — không có màn hình đăng nhập nào khác, và không có dữ liệu nào được thu thập ngoài những gì mục ở trên đã nói.'
          : 'The quick-tap browser extension does not create a separate account. A content script on app.timetracker.io.vn reads the session the app already stored and uses that same session — there is no separate sign-in screen, and nothing is collected beyond what the section above already covers.'}
      </p>
      <ul>
        <li>
          <strong>storage</strong>
          {vi
            ? ' — giữ phiên đăng nhập và một bản sao dữ liệu gần nhất trong máy, để mở popup lên là thấy ngay.'
            : ' — holds the session and a local copy of recent data, so opening the popup shows something immediately.'}
        </li>
        <li>
          <strong>alarms</strong>
          {vi
            ? ' — chạy đồng hồ Pomodoro và làm mới dữ liệu định kỳ, kể cả khi popup đang đóng.'
            : ' — runs the Pomodoro clock and refreshes data periodically, even while the popup is closed.'}
        </li>
        <li>
          <strong>notifications</strong>
          {vi ? ' — báo khi hết một phiên Pomodoro.' : ' — alerts when a Pomodoro session ends.'}
        </li>
        <li>
          <strong>{vi ? 'Quyền truy cập app.timetracker.io.vn' : 'Access to app.timetracker.io.vn'}</strong>
          {vi
            ? ' — chỉ dùng để đọc phiên đăng nhập nói trên và để mở/focus lại tab app khi bạn bấm nút mở app. Không truy cập trang nào khác.'
            : ' — used only to read the session above and to open or focus the app tab when you click "open app". No other site is touched.'}
        </li>
      </ul>
      <p>
        {vi
          ? 'Gỡ tiện ích không xoá gì khỏi tài khoản của bạn — dữ liệu vẫn nằm nguyên trong app, vì tiện ích chưa từng giữ một bản riêng nào ngoài cache cục bộ nói trên.'
          : 'Removing the extension deletes nothing from your account — your data stays exactly where it is in the app, since the extension never held a separate copy of anything beyond the local cache above.'}
      </p>

      <h2>Cookie</h2>
      <p>
        {vi
          ? 'App chỉ lưu phiên đăng nhập trong trình duyệt để bạn không phải đăng nhập lại mỗi lần mở. Không có cookie quảng cáo hay cookie theo dõi hành vi.'
          : 'The only thing stored is your sign-in session, so you do not have to log in each time. No advertising cookies, no behavioural tracking.'}
      </p>

      <h2>{vi ? 'Liên hệ' : 'Contact'}</h2>
      <p>
        {vi ? 'Có câu hỏi về dữ liệu của bạn, gửi email tới ' : 'Questions about your data: email '}
        {CONTACT}.
      </p>
      <p>
        <a href={pathFor(lang, '/terms')}>{vi ? 'Điều khoản sử dụng' : 'Terms of service'}</a>
      </p>
    </Shell>
  );
}

export function TermsPage({ lang }: { lang: Lang }) {
  const vi = lang === 'vi';
  return (
    <Shell lang={lang} path="/terms">
      <h1>{vi ? 'Điều khoản sử dụng' : 'Terms of service'}</h1>
      <p className="doc-meta">
        {vi ? 'Cập nhật' : 'Updated'} {LAST_UPDATED}
      </p>

      <p>
        {vi
          ? 'Dùng Time Tracker nghĩa là bạn đồng ý với những điều dưới đây. Chúng được viết ngắn vì dịch vụ cũng đơn giản.'
          : 'Using Time Tracker means agreeing to what follows. It is short because the service is simple.'}
      </p>

      <h2>{vi ? 'Dịch vụ' : 'The service'}</h2>
      <p>
        {vi
          ? 'Time Tracker là công cụ bấm giờ làm việc và tạo hoá đơn từ số giờ đã log. Hiện tại dịch vụ miễn phí và không giới hạn số dự án, số log hay số hoá đơn.'
          : 'Time Tracker records working hours and turns them into invoices. It is free today, with no cap on projects, entries or invoices.'}
      </p>

      <h2>{vi ? 'Tài khoản của bạn' : 'Your account'}</h2>
      <ul>
        <li>
          {vi
            ? 'Bạn chịu trách nhiệm giữ an toàn cho email dùng để đăng nhập.'
            : 'Keeping your sign-in address secure is up to you.'}
        </li>
        <li>
          {vi
            ? 'Một tài khoản dành cho một người. Dữ liệu giữa các tài khoản tách biệt hoàn toàn.'
            : 'One account is for one person. Accounts are fully isolated from each other.'}
        </li>
        <li>{vi ? 'Không dùng dịch vụ để làm việc trái pháp luật.' : 'Do not use the service to break the law.'}</li>
      </ul>

      <h2>{vi ? 'Dữ liệu của bạn là của bạn' : 'Your data is yours'}</h2>
      <p>
        {vi
          ? 'Nội dung bạn tạo ra thuộc về bạn. Bạn tải về hoặc xoá bất cứ lúc nào từ trang Cài đặt. Xem thêm ở '
          : 'What you create belongs to you. Download or erase it from Settings at any time. See '}
        <a href={pathFor(lang, '/privacy')}>{vi ? 'Quyền riêng tư' : 'Privacy'}</a>.
      </p>

      <h2>{vi ? 'Sao lưu' : 'Backups'}</h2>
      <p>
        {vi
          ? 'Dữ liệu được đồng bộ lên cloud, nhưng bạn nên tải backup định kỳ cho những gì quan trọng — app có sẵn nút tải JSON trong Cài đặt. Không dịch vụ nào thay thế được một bản sao nằm trên máy bạn.'
          : 'Your data syncs to the cloud, but download a backup now and then for anything that matters — Settings has a JSON export. No service replaces a copy you hold yourself.'}
      </p>

      <h2>{vi ? 'Giới hạn trách nhiệm' : 'Limits of liability'}</h2>
      <p>
        {vi
          ? 'Dịch vụ được cung cấp "nguyên trạng". Chúng tôi cố gắng để nó chạy đúng và liên tục, nhưng không cam kết không có lỗi hay không gián đoạn, và không chịu trách nhiệm cho thiệt hại gián tiếp phát sinh từ việc sử dụng. Số tiền tính trên hoá đơn do bạn tạo là trách nhiệm của bạn — hãy kiểm tra trước khi gửi cho khách.'
          : 'The service is provided as is. We work to keep it correct and available, but make no guarantee of being bug-free or uninterrupted, and are not liable for indirect damages arising from its use. The amounts on an invoice you generate are your responsibility — check them before sending.'}
      </p>

      <h2>{vi ? 'Thay đổi' : 'Changes'}</h2>
      <p>
        {vi
          ? 'Nếu điều khoản thay đổi theo hướng ảnh hưởng tới bạn, thông báo sẽ được gửi qua email đăng nhập trước khi áp dụng. Ngày cập nhật luôn nằm ở đầu trang này.'
          : 'If these terms change in a way that affects you, notice goes to your sign-in address before it takes effect. The date at the top of this page always reflects the current version.'}
      </p>

      <h2>{vi ? 'Liên hệ' : 'Contact'}</h2>
      <p>
        {vi ? 'Mọi thắc mắc, gửi email tới ' : 'Anything else: email '}
        {CONTACT}.
      </p>
    </Shell>
  );
}
