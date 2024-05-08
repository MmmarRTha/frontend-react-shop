export default function Category({category: {slug, name}}: {category: {slug: string, id: number, name: string}}) {

  return (
    <div className="flex items-center w-full gap-4 p-3 border cursor-pointer hover:bg-green-600">
        <img 
             src={`img/icono_${slug}.svg`}
             alt="Image slug"
             className="w-12" 
        />
        <p className="text-lg font-bold truncate cursor-pointer">{name}</p>
    </div>
  )
}
