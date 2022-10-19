module.exports = mongoose => {
    const DataCpu = mongoose.model(
      "dataCpu",
      mongoose.Schema(
        {
          cpuname: String,
          type: String,
          platform: String,
          release: String,
          remainingRam: String,
          totalRam: String
        },
        { timestamps: true }
      )
    );
  
    //   _id: 5b453fb83de88413bc523928,
    // 	cpuname: 'SafeClick_CPU',
    // 	type: 'Windows_NT',
    // 	platform: 'win32',
    // 	release: '10.0.17134',
    // 	remainingRam: 11338039296,
    // 	totalRam: 17063497728

    return DataCpu;
  };


