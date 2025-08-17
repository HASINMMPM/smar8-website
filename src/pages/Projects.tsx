// import React from 'react';

// interface OngoingProject {
//   icon: string;
//   title: string;
//   location: string;
//   scope?: string;
//   partners?: string;
//   goal?: string;
//   featuresEnabled?: string;
//   useCase?: string;
//   impact: string[];
//   featuresUsed?: string[];
// }

// interface PilotProject {
//   icon: string;
//   title: string;
//   testedIn: string;
//   whatItDoes: string[];
//   features?: string[];
// }

// interface CommunityProject {
//   icon: string;
//   title: string;
//   location?: string;
//   targetGroup?: string;
//   results: string[];
//   contentCovered?: string[];
// }

// interface UpcomingProject {
//   projectName: string;
//   location: string;
//   status: string;
// }

// const Projects: React.FC = () => {
//   const ongoingProjects: OngoingProject[] = [
//     {
//       icon: "📍",
//       title: "Ernakulam Smart Registration Pilot",
//       location: "Ernakulam, Kerala",
//       scope: "3,200+ tenants across 38 buildings",
//       impact: [
//         "Fully digital tenant onboarding",
//         "700+ room shifts tracked",
//         "Police reports generated within 24 hours",
//         "Coordinators assigned to 100% of active buildings"
//       ]
//     },
//     {
//       icon: "📍",
//       title: "Bengali Worker Welfare Initiative",
//       location: "Kozhikode, Kerala",
//       partners: "Local NGOs + Building Associations",
//       goal: "Bring 25,000+ Bengali-speaking workers into a digital identity & housing system",
//       featuresEnabled: "Bengali UI, job matching, QR-coded ID slips"
//     },
//     {
//       icon: "📍",
//       title: "Multi-Property Owner Dashboard Rollout",
//       location: "Across 3 districts",
//       useCase: "Owners managing 5+ properties",
//       featuresUsed: [
//         "Property grouping",
//         "Bulk tenant uploads",
//         "Staff role-based access for assistants"
//       ]
//     }
//   ];

//   const pilotProjects: PilotProject[] = [
//     {
//       icon: "🧪",
//       title: "Police Auto-Intimation System (Beta)",
//       testedIn: "Aluva & Perumbavoor Police Stations",
//       whatItDoes: [
//         "Generates & emails digital PDF reports directly to station officers",
//         "Includes room history, tenant details, and signature fields",
//         "Complies with station's offline requirements"
//       ]
//     },
//     {
//       icon: "🧪",
//       title: "Job Matching for Migrants (Beta)",
//       testedWith: "4 factories and 2 contractors",
//       features: [
//         "Job listings in worker's preferred language",
//         "Click-to-call employer from app",
//         "Salary range filter and skill-tagged jobs"
//       ]
//     }
//   ];

//   const communityProjects: CommunityProject[] = [
//     {
//       icon: "🧑‍🤝‍🧑",
//       title: "NGO-Backed Onboarding Drive",
//       location: "Malappuram",
//       results: [
//         "1,000+ workers registered in 4 days",
//         "All tenants received multilingual ID slips",
//         "Used by 6 building owners in rural areas"
//       ]
//     },
//     {
//       icon: "🎓",
//       title: "Digital Literacy Camps",
//       targetGroup: "Coordinators and building managers",
//       contentCovered: [
//         "How to register tenants",
//         "Upload valid documents",
//         "Explain police reporting in local terms"
//       ]
//     }
//   ];

//   const upcomingProjects: UpcomingProject[] = [
//     { projectName: "Women Migrant Tracking", location: "Palakkad", status: "In Design" },
//     { projectName: "QR Sticker Integration", location: "Statewide", status: "Testing" },
//     { projectName: "NGO API Partnership", location: "Tamil Nadu", status: "Discussion" }
//   ];

//   return (
//     <div className="min-h-screen bg-gray-50">


//       {/* Main Content */}
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
//         {/* Hero Section */}
//         <div className="text-center mb-16">
//           <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
//             🏗️ Projects – Smar8 Solutions
//           </h1>
//           <p className="text-2xl md:text-3xl font-semibold text-blue-600 mb-6">
//             Real Deployments. Real Impact.
//           </p>
//           <p className="text-lg md:text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
//             At Smar8, we believe in action. Our platform is already transforming how migrant housing, job discovery, and registration are handled across various communities. Here's a look at our growing list of live and pilot projects.
//           </p>
//         </div>

//         {/* Ongoing Projects Section */}
//         <section className="mb-16">
//           <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
//             ✅ Ongoing Projects
//           </h2>
//           <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
//             {ongoingProjects.map((project, index) => (
//               <div key={index} className="bg-white rounded-lg shadow-sm border p-6 hover:shadow-md transition-shadow duration-200">
//                 <div className="flex items-center mb-4">
//                   <span className="text-3xl mr-3">{project.icon}</span>
//                   <h3 className="text-xl font-semibold text-gray-900">{project.title}</h3>
//                 </div>
                
//                 <div className="space-y-3 mb-4">
//                   <p className="text-gray-700 font-medium">📍 {project.location}</p>
//                   {project.scope && <p className="text-gray-600 text-sm">Scope: {project.scope}</p>}
//                   {project.partners && <p className="text-gray-600 text-sm">Partners: {project.partners}</p>}
//                   {project.goal && <p className="text-gray-600 text-sm">Goal: {project.goal}</p>}
//                   {project.useCase && <p className="text-gray-600 text-sm">Use Case: {project.useCase}</p>}
//                   {project.featuresEnabled && <p className="text-gray-600 text-sm">Features: {project.featuresEnabled}</p>}
//                 </div>

//                 {project.impact && (
//                   <div>
//                     <h4 className="font-semibold text-gray-900 mb-2">Impact:</h4>
//                     <ul className="space-y-1">
//                       {project.impact.map((item, itemIndex) => (
//                         <li key={itemIndex} className="text-gray-600 text-sm flex items-start">
//                           <span className="text-blue-500 mr-2">•</span>
//                           {item}
//                         </li>
//                       ))}
//                     </ul>
//                   </div>
//                 )}

//                 {project.featuresUsed && (
//                   <div className="mt-4">
//                     <h4 className="font-semibold text-gray-900 mb-2">Features Used:</h4>
//                     <ul className="space-y-1">
//                       {project.featuresUsed.map((feature, featureIndex) => (
//                         <li key={featureIndex} className="text-gray-600 text-sm flex items-start">
//                           <span className="text-green-500 mr-2">•</span>
//                           {feature}
//                         </li>
//                       ))}
//                     </ul>
//                   </div>
//                 )}
//               </div>
//             ))}
//           </div>
//         </section>

//         {/* Pilot Projects Section */}
//         <section className="mb-16">
//           <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
//             🚀 Pilot Projects
//           </h2>
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
//             {pilotProjects.map((project, index) => (
//               <div key={index} className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-lg border-2 border-purple-200 p-6 relative">
//                 {/* Beta Badge */}
//                 <div className="absolute -top-3 -right-3 bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
//                   🧪 Beta
//                 </div>
                
//                 <div className="flex items-center mb-4">
//                   <span className="text-3xl mr-3">{project.icon}</span>
//                   <h3 className="text-xl font-semibold text-gray-900">{project.title}</h3>
//                 </div>
                
//                 <p className="text-gray-700 font-medium mb-4">Tested In: {project.testedIn}</p>
                
//                 {project.whatItDoes && (
//                   <div className="mb-4">
//                     <h4 className="font-semibold text-gray-900 mb-2">What It Does:</h4>
//                     <ul className="space-y-1">
//                       {project.whatItDoes.map((item, itemIndex) => (
//                         <li key={itemIndex} className="text-gray-600 text-sm flex items-start">
//                           <span className="text-purple-500 mr-2">•</span>
//                           {item}
//                         </li>
//                       ))}
//                     </ul>
//                   </div>
//                 )}

//                 {project.features && (
//                   <div>
//                     <h4 className="font-semibold text-gray-900 mb-2">Features:</h4>
//                     <ul className="space-y-1">
//                       {project.features.map((feature, featureIndex) => (
//                         <li key={featureIndex} className="text-gray-600 text-sm flex items-start">
//                           <span className="text-indigo-500 mr-2">•</span>
//                           {feature}
//                         </li>
//                       ))}
//                     </ul>
//                   </div>
//                 )}
//               </div>
//             ))}
//           </div>
//         </section>

//         {/* Community Projects Section */}
//         <section className="mb-16">
//           <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
//             🤝 Community Projects
//           </h2>
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
//             {communityProjects.map((project, index) => (
//               <div key={index} className="bg-white rounded-lg shadow-sm border p-6 hover:shadow-md transition-shadow duration-200">
//                 <div className="flex items-center mb-4">
//                   <span className="text-3xl mr-3">{project.icon}</span>
//                   <h3 className="text-xl font-semibold text-gray-900">{project.title}</h3>
//                 </div>
                
//                 {project.location && <p className="text-gray-700 font-medium mb-2">📍 {project.location}</p>}
//                 {project.targetGroup && <p className="text-gray-700 font-medium mb-2">Target: {project.targetGroup}</p>}
                
//                 <div className="mb-4">
//                   <h4 className="font-semibold text-gray-900 mb-2">Results:</h4>
//                   <ul className="space-y-1">
//                     {project.results.map((result, resultIndex) => (
//                       <li key={resultIndex} className="text-gray-600 text-sm flex items-start">
//                         <span className="text-green-500 mr-2">•</span>
//                         {result}
//                       </li>
//                     ))}
//                   </ul>
//                 </div>

//                 {project.contentCovered && (
//                   <div>
//                     <h4 className="font-semibold text-gray-900 mb-2">Content Covered:</h4>
//                     <ul className="space-y-1">
//                       {project.contentCovered.map((content, contentIndex) => (
//                         <li key={contentIndex} className="text-gray-600 text-sm flex items-start">
//                           <span className="text-blue-500 mr-2">•</span>
//                           {content}
//                         </li>
//                       ))}
//                     </ul>
//                   </div>
//                 )}
//               </div>
//             ))}
//           </div>
//         </section>

//         {/* Upcoming Projects Section */}
//         <section className="mb-16">
//           <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
//             🌍 Upcoming Projects
//           </h2>
//           <div className="bg-white rounded-lg shadow-sm border overflow-hidden">
//             {/* Desktop Table */}
//             <div className="hidden md:block">
//               <table className="w-full">
//                 <thead className="bg-gradient-to-r from-blue-50 to-indigo-50">
//                   <tr>
//                     <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Project Name</th>
//                     <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Location</th>
//                     <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Status</th>
//                   </tr>
//                 </thead>
//                 <tbody className="divide-y divide-gray-200">
//                   {upcomingProjects.map((project, index) => (
//                     <tr key={index} className="hover:bg-gray-50">
//                       <td className="px-6 py-4 font-medium text-gray-900">{project.projectName}</td>
//                       <td className="px-6 py-4 text-gray-700">{project.location}</td>
//                       <td className="px-6 py-4">
//                         <span className={`inline-flex px-3 py-1 text-sm font-medium rounded-full ${
//                           project.status === 'In Design' ? 'bg-yellow-100 text-yellow-800' :
//                           project.status === 'Testing' ? 'bg-blue-100 text-blue-800' :
//                           'bg-gray-100 text-gray-800'
//                         }`}>
//                           {project.status}
//                         </span>
//                       </td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>
            
//             {/* Mobile Cards */}
//             <div className="md:hidden">
//               {upcomingProjects.map((project, index) => (
//                 <div key={index} className="p-6 border-b border-gray-200 last:border-b-0">
//                   <div className="flex items-start justify-between mb-3">
//                     <div>
//                       <h3 className="font-medium text-gray-900">{project.projectName}</h3>
//                       <p className="text-gray-700 text-sm">{project.location}</p>
//                     </div>
//                     <span className={`inline-flex px-3 py-1 text-sm font-medium rounded-full ${
//                       project.status === 'In Design' ? 'bg-yellow-100 text-yellow-800' :
//                       project.status === 'Testing' ? 'bg-blue-100 text-blue-800' :
//                       'bg-gray-100 text-gray-800'
//                     }`}>
//                       {project.status}
//                     </span>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </section>

//         {/* Project Gallery Section */}
//         <section className="mb-16">
//           <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
//             📸 Project Gallery
//           </h2>
//           <div className="bg-white rounded-lg shadow-sm border p-8 md:p-12 text-center">
//             <div className="text-6xl mb-4">📸</div>
//             <p className="text-lg text-gray-700 mb-6">
//               Add images, videos, or QR codes to real project locations here — optional
//             </p>
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//               {[1, 2, 3].map((item) => (
//                 <div key={item} className="bg-gray-100 rounded-lg p-8 border-2 border-dashed border-gray-300">
//                   <div className="text-4xl mb-3">🖼️</div>
//                   <p className="text-gray-500 text-sm">Image/Video Placeholder</p>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </section>

//         {/* Collaborate CTA Section */}
//         <section className="text-center">
//           <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl p-8 md:p-12 text-white">
//             <h2 className="text-3xl md:text-4xl font-bold mb-6">
//               💡 Want to Collaborate?
//             </h2>
//             <p className="text-xl mb-8 opacity-90 max-w-4xl mx-auto">
//               If you're a building owner group, panchayat, NGO, or government body and want to digitize tenant and workforce management:
//             </p>
            
//             <div className="flex flex-col sm:flex-row gap-6 justify-center mb-8">
//               <div className="flex items-center justify-center">
//                 <span className="text-2xl mr-3">📧</span>
//                 <a
//                   href="mailto:projects@smar8.in"
//                   className="text-2xl font-bold hover:opacity-80 transition-opacity duration-200"
//                 >
//                   projects@smar8.in
//                 </a>
//               </div>
//               <div className="flex items-center justify-center">
//                 <span className="text-2xl mr-3">📞</span>
//                 <a
//                   href="tel:+91-XXXXXXXXXX"
//                   className="text-2xl font-bold hover:opacity-80 transition-opacity duration-200"
//                 >
//                   +91-XXXXXXXXXX
//                 </a>
//               </div>
//             </div>
            
//             <p className="text-lg mb-8 opacity-90">
//               Let's build the future — one verified room at a time.
//             </p>
            
//             <a
//               href="mailto:projects@smar8.in"
//               className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-200 text-lg shadow-lg"
//             >
//               <span className="mr-2">🤝</span>
//               Collaborate with Us
//             </a>
//           </div>
//         </section>
//       </div>
//     </div>
//   );
// };

// export default Projects;
