//your JS code here. If required.

 function createRandomPromise(index) {
            return new Promise((resolve) => {
                const time = Math.random() * 2 + 1;
                setTimeout(() => resolve({ index, time }), time * 1000);
            });
        }

        const promises = [
            createRandomPromise(1),
            createRandomPromise(2),
            createRandomPromise(3)
        ];

        const startTime = performance.now();

        Promise.all(promises).then(results => {
            const endTime = performance.now();
            const totalTime = (endTime - startTime) / 1000;

            const table = document.getElementById('promiseTable');
            const loadingRow = document.getElementById('loadingRow');
            table.removeChild(loadingRow);

            results.forEach(result => {
                const row = table.insertRow();
                const cell1 = row.insertCell(0);
                const cell2 = row.insertCell(1);
                cell1.textContent = `Promise ${result.index}`;
                cell2.textContent = result.time.toFixed(3) + ' seconds';
            });

            const totalRow = table.insertRow();
            const cell1 = totalRow.insertCell(0);
            const cell2 = totalRow.insertCell(1);
            cell1.textContent = 'Total';
            cell2.textContent = totalTime.toFixed(3) + ' seconds';
        });
