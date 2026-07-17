const Header = () => {
  return (
    <div className="p-2 flex justify-between bg-green-700 text-white text-lg">
      <div className="px-3 py-1"><a href="/lastwork/">すわナビ</a></div>
      <div className="flex justify-center divide-x-1 divide-gray-400">
        <div className="px-3 py-1"><a href="/lastwork/place/">観光スポット</a></div>
        <div className="px-3 py-1"><a href="/lastwork/event/">イベント情報</a></div>
        <div className="px-3 py-1"><a href="/lastwork/contact/">お問い合わせ</a></div>
      </div>
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('header'));
root.render(<Header />)