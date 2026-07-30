import Image from 'next/image';
import { Brand } from '@/components/Brand';
import { LiveMeter } from '@/components/LiveMeter';

const APP_URL = 'https://app.timetracker.io.vn';

/** Every section is one beat of a working day, and the gutter time says which. */
function Row({
  at,
  note,
  children,
  id,
}: {
  at: string;
  note?: string;
  children: React.ReactNode;
  id?: string;
}) {
  return (
    <section className="row" id={id}>
      <div className="row-gutter">
        <span className="gutter-time">{at}</span>
        {note ? <span className="gutter-note">{note}</span> : null}
      </div>
      <div>{children}</div>
    </section>
  );
}

function Shot({
  src,
  alt,
  width,
  height,
  caption,
  paper = false,
  priority = false,
}: {
  src: string;
  alt: string;
  width: number;
  height: number;
  caption: string[];
  paper?: boolean;
  priority?: boolean;
}) {
  return (
    <figure style={{ margin: 0 }}>
      <div className={paper ? 'shot shot-paper' : 'shot'}>
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          priority={priority}
          sizes="(min-width: 1180px) 1024px, 100vw"
        />
      </div>
      <figcaption className="shot-caption">
        {caption.map((line) => (
          <span key={line}>{line}</span>
        ))}
      </figcaption>
    </figure>
  );
}

const FEATURES = [
  {
    key: 'Offline',
    title: 'Mất mạng vẫn bấm giờ được',
    body: 'App chạy local-first. Không có mạng thì cứ log tiếp, thay đổi được đẩy lên ngay khi mạng về.',
  },
  {
    key: 'Sync',
    title: 'Đồng bộ mà không cần bật gì',
    body: 'Mỗi thay đổi tự lên cloud. Mở máy khác, đăng nhập, dữ liệu đã ở đó.',
  },
  {
    key: 'PWA',
    title: 'Cài như app thật',
    body: 'Thêm vào Home Screen hoặc Dock, mở ra là chạy toàn màn hình, không thanh địa chỉ.',
  },
  {
    key: 'Đa tiền tệ',
    title: 'VND, USD, EUR, SGD',
    body: 'Mỗi dự án một rate và một loại tiền. Báo cáo cộng riêng từng loại, không quy đổi ẩu.',
  },
  {
    key: 'Làm tròn',
    title: 'Làm tròn theo cách bạn tính tiền',
    body: 'Lên hoặc gần nhất, bước 5/6/10/15/30 phút. Xem trước kết quả trước khi chốt.',
  },
  {
    key: 'Song ngữ',
    title: 'Tiếng Việt và English',
    body: 'Đổi ngôn ngữ ngay trên header. Hoá đơn in ra theo đúng ngôn ngữ đang chọn.',
  },
];

const SHORTCUTS: { keys: string[]; action: string }[] = [
  { keys: ['S'], action: 'bắt đầu / dừng timer, ở bất kỳ trang nào' },
  { keys: ['N'], action: 'thêm log thủ công' },
  { keys: ['⌘', 'K'], action: 'command palette — nhảy tới đâu cũng được' },
  { keys: ['D'], action: 'đổi nền sáng / tối' },
];

export default function Home() {
  return (
    <>
      <header className="masthead">
        <div className="sheet masthead-inner">
          <Brand />
          <nav className="masthead-nav">
            <a href="#cach-dung">Cách dùng</a>
            <a href="#tinh-nang">Tính năng</a>
            <a href="#gia">Giá</a>
          </nav>
          <a className="btn btn-primary btn-sm" href={APP_URL}>
            Mở app
          </a>
        </div>
      </header>

      <main>
        <div className="sheet">
          {/* The hero opens on what the product is: a meter running and money
              adding up. Real code, not a picture of a timer. */}
          <Row at="09:02" note="Bấm S. Đồng hồ chạy." id="cach-dung">
            <span className="eyebrow">Bấm giờ · Xuất hoá đơn</span>
            <h1 style={{ marginTop: 18 }}>
              Giờ của bạn là tiền.
              <br />
              Đếm cho đủ.
            </h1>
            <p className="lede">
              Bấm một phím là đồng hồ chạy và tiền cộng dồn theo từng giây. Cuối tháng gộp
              giờ chưa xuất thành hoá đơn PDF, không phải dò lại Google Sheets.
            </p>

            <LiveMeter />

            <div className="hero-actions">
              <a className="btn btn-primary" href={APP_URL}>
                Bắt đầu miễn phí
              </a>
              <a className="btn btn-ghost" href="#xem-app">
                Xem app trước
              </a>
            </div>
            <p className="hero-fineprint">
              Đăng nhập bằng Google hoặc magic link. Không cần thẻ, không cần mật khẩu.
            </p>

            <div id="xem-app" />
            <Shot
              src="/shots/app-timer.png"
              alt="Trang bấm giờ của Time Tracker: đồng hồ lớn, ô chọn dự án, nút bắt đầu và khung Pomodoro"
              width={1440}
              height={900}
              priority
              caption={['Trang bấm giờ', 'chọn dự án → nhập việc đang làm → Start', 'Pomodoro tuỳ chọn']}
            />
          </Row>

          <Row at="10:30" note="Nghỉ tay, xem hôm nay đã đi tới đâu.">
            <h2>Biết mình đang ở đâu, không phải đoán</h2>
            <p className="lede">
              Giờ theo ngày so với mục tiêu, tỷ trọng từng dự án, chuỗi ngày làm liên tục, và
              số giờ chưa xuất hoá đơn — tách riêng theo từng loại tiền.
            </p>
            <Shot
              src="/shots/app-dashboard.png"
              alt="Trang tổng quan: thẻ số liệu, thanh mục tiêu, biểu đồ giờ làm theo ngày và donut tỷ trọng dự án"
              width={1440}
              height={900}
              caption={['Tổng quan', 'giờ/ngày · mục tiêu · tỷ trọng dự án', 'chuỗi ngày làm']}
            />
          </Row>

          <Row at="13:45" note="Sửa lại một log ghi sai giờ.">
            <h2>Sổ giờ là một cái bảng, không phải một mớ ghi chú</h2>
            <p className="lede">
              Lọc theo dự án, tag, khoảng ngày, trạng thái hoá đơn. Sửa giờ, gắn tag, đánh dấu
              không tính tiền. Xuất CSV khi khách muốn xem chi tiết.
            </p>
            <Shot
              src="/shots/app-entries.png"
              alt="Trang sổ giờ: bảng log có bộ lọc theo dự án, tag và khoảng ngày, cùng dòng tổng ở cuối"
              width={1440}
              height={900}
              caption={['Sổ giờ', 'lọc · sửa · gắn tag · xuất CSV']}
            />
          </Row>

          <Row at="16:45" note="Chốt tháng. Gộp giờ thành hoá đơn.">
            <h2>Từ giờ đã log thành hoá đơn, trong một lần bấm</h2>
            <p className="lede">
              Chọn dự án và kỳ làm việc, app gom mọi entry chưa xuất, làm tròn theo cấu hình
              của bạn, cộng VAT và cấp số hoá đơn. In ra hoặc lưu PDF — bản in luôn nền trắng
              để màu không lệch.
            </p>
            <Shot
              src="/shots/app-invoice-doc.png"
              alt="Hoá đơn in ra: thông tin bên xuất, khách, kỳ làm việc, bảng dòng công việc và tổng thanh toán"
              width={748}
              height={663}
              paper
              caption={['Bản in hoá đơn', 'số HĐ tự tăng · VAT · hạn thanh toán', 'in hoặc lưu PDF']}
            />
          </Row>

          <Row at="17:20" note="Xem lại: tuần này thu được bao nhiêu.">
            <h2>Báo cáo trả lời đúng câu bạn cần hỏi</h2>
            <p className="lede">
              Theo dự án, theo ngày, hoặc từng dòng sẽ lên hoá đơn. Giờ thật và giờ tính tiền
              nằm cạnh nhau, nên bạn thấy rõ việc làm tròn ảnh hưởng bao nhiêu.
            </p>
            <Shot
              src="/shots/app-reports.png"
              alt="Trang báo cáo: giờ thật, giờ tính tiền, tổng tiền và bảng tổng hợp theo dự án"
              width={1440}
              height={900}
              caption={['Báo cáo', 'giờ thật vs giờ tính tiền', 'copy bảng · xuất CSV']}
            />
          </Row>

          <Row at="—" note="Những thứ chạy nền, bạn không phải nghĩ tới." id="tinh-nang">
            <h2>Phần còn lại, đã lo sẵn</h2>
            <div className="features">
              {FEATURES.map((feature) => (
                <div className="feature" key={feature.key}>
                  <span className="feature-key">{feature.key}</span>
                  <h3>{feature.title}</h3>
                  <p>{feature.body}</p>
                </div>
              ))}
            </div>

            <ul className="shortcuts">
              {SHORTCUTS.map((shortcut) => (
                <li key={shortcut.action}>
                  <span>
                    {shortcut.keys.map((key) => (
                      <kbd key={key}>{key}</kbd>
                    ))}
                  </span>
                  {shortcut.action}
                </li>
              ))}
            </ul>
          </Row>
        </div>

        {/* The page bills itself, in the shape of the invoice footer the product
            prints — and the amount is the pricing. */}
        <div className="sheet total" id="gia">
          <div className="total-rule" />
          <div className="total-line">
            <span className="total-label">Tổng thanh toán</span>
            <span className="total-amount">0 ₫</span>
          </div>
          <h2 style={{ marginTop: 34 }}>Miễn phí. Bắt đầu bằng một phím.</h2>
          <p className="lede">
            Không giới hạn dự án, không giới hạn log, không giới hạn hoá đơn. Dữ liệu là của
            bạn — tải backup JSON hoặc CSV bất cứ lúc nào.
          </p>
          <div className="hero-actions">
            <a className="btn btn-primary" href={APP_URL}>
              Mở app và bấm Start
            </a>
          </div>
        </div>
      </main>

      <footer className="colophon">
        <div className="sheet colophon-inner">
          <Brand />
          <span>
            <a href={APP_URL}>app.timetracker.io.vn</a> · Làm ở Việt Nam
          </span>
        </div>
      </footer>
    </>
  );
}
