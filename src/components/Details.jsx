import React from 'react'
import { useState } from 'react'

const Details = () => {
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(formData)
      }

      const [formData, setFormData] = useState({
        gender: 'Woman',
        ageFrom: '22',
        ageTo: '27',
        religion: '',
        motherTongue: ''
      })
  return (
        <form onSubmit={handleSubmit} className="search-form w-full justify-between h-[50%] p-3 font-roboto flex flex-row sm:flex-col">
        <div className="form-group">
          <h4>I'm looking for a</h4>
          <select className='w-full' value={formData.gender} onChange={(e) => setFormData({...formData, gender: e.target.value})} >
            <option value="Woman">Woman</option>
            <option value="Man">Man</option>
          </select>
        </div>

        <div className="form-group1 flex flex-col gap-1.5">
          <h4 className='float-left'>aged</h4>
          <div className='flex flex-row gap-1'>
            <select className='w-full' value={formData.ageFrom} onChange={(e) => setFormData({...formData, ageFrom: e.target.value})} >
              {[...Array(43)].map((_, i) => (
                <option key={i} value={18 + i}>{18 + i}</option>
              ))}
            </select>
            <h4>to</h4>
            <select className='w-full' value={formData.ageTo} onChange={(e) => setFormData({...formData, ageTo: e.target.value})} >
              {[...Array(43)].map((_, i) => (
                <option key={i} value={18 + i}>{18 + i}</option>
              ))}
            </select>
          </div>
          
        </div>

        <div className="form-group mb-4 md:mb-0">
          <h4 className="text-white mb-2">of religion</h4>
          <select className='w-full p-2 rounded' value={formData.religion} onChange={(e) => setFormData({...formData, religion: e.target.value})} >
            <option value="">Select</option>
            <option value="Hindu">Hindu</option>
            <option value="Muslim">Muslim</option>
            <option value="Christian">Christian</option>
            <option value="Sikh">Sikh</option>
            <option value="Buddhist">Buddhist</option>
            <option value="Jain">Jain</option>
            <option value="Parsi">Parsi</option>
            <option value="Jewish">Jewish</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div className="form-group mb-4 md:mb-0">
          <h4 className="text-white mb-2">and mother tongue</h4>
          <select className='w-full p-2 rounded' value={formData.motherTongue} onChange={(e) => setFormData({...formData, motherTongue: e.target.value})} >
            <option value="">Select</option>
            <option value="Hindi">Hindi</option>
            <option value="Marathi">Marathi</option>
            <option value="Punjabi">Punjabi</option>
            <option value="Bengali">Bengali</option>
            <option value="Gujarati">Gujarati</option>
            <option value="Telugu">Telugu</option>
            <option value="Tamil">Tamil</option>
            <option value="Kannada">Kannada</option>
            <option value="Malayalam">Malayalam</option>
            <option value="Urdu">Urdu</option>
            <option value="Odia">Odia</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <button type="submit" className="submit-btn w-full md:w-auto px-6 py-3 mt-4 md:mt-0 bg-[#00bcd4] text-white rounded font-bold hover:bg-[#008c9e] transition-colors">Let's Begin</button>
      </form>
  )
}

export default Details