const Footer = () => {
  return (
    <div className="p-2 bg-gray-600 text-white">
      <div className="flex flex-row justify-around divide-x-1 divide-gray-100">
        <div className="p-2 flex flex-col w-full">
          <ul className="px-2 list-disc">
            <li><a href="/lastwork/">ホーム</a></li>
            <li><a href="/lastwork/place/">観光スポット</a></li>
            <li><a href="/lastwork/event/">イベント情報</a></li>
            <li><a href="/lastwork/contact">お問い合わせ</a></li>
          </ul>
        </div>
      </div>
      <p>&copy;2026 SUWANAVI ALL Rights Reserved.</p>
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('footer'));
root.render(<Footer />)