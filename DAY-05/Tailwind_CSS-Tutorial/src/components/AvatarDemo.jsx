function AvatarDemo() {
  return (
    <div className="px-5 py-10 text-center">
      <h2 className="text-4xl font-bold mb-8">
        Avatars
      </h2>

      <div className="flex justify-center gap-5 flex-wrap">
        <div className="avatar online">
          <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
            <img src="https://i.pravatar.cc/150?img=1" />
          </div>
        </div>

        <div className="avatar offline">
          <div className="w-24 rounded-full">
            <img src="https://i.pravatar.cc/150?img=2" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default AvatarDemo
